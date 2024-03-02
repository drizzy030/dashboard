import { UserRole } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { db } from "~/server/db";

interface EventData {
  customer_email: string;
  name: string;
  product_type: string;
  quantity: number;
  serials: string[];
  gateway: string;
  crypto_address: string;
  crypto_amount: number;
  crypto_confirmations_needed: number;
  status: string;
  product_title: string;
  product: {
    title: string;
    description: string;
    price_display: number;
    currency: string;
  };
}

interface Event {
  event: string;
  data: EventData;
}

export async function POST(req: NextRequest) {
  const event: Event = await req.json() as Event;

  const email = event.data.customer_email;

  if (event.event !== "order:paid" || !email) {
    return NextResponse.json({
      status: 400,
      message: "Invalid event or missing email",
    });
  }

  const user = await db.user.findUnique({
    where: { email },
  });

  if (event.event === "order:paid") {
    if (!user) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    const product = await db.product.create({
      data: {
        shop: event.data.name,
        type: event.data.product_type,
        quantity: event.data.quantity,
        serial: event.data?.serials?.[0],
        title: event.data.product.title,
        description: event.data.product.description,
        price: event.data.product.price_display,
        userId: user.id,
      },
    });

    await db.transaction.create({
      data: {
        shop: event.data.name,
        gateway: event.data.gateway,
        crypto_address: event.data.crypto_address,
        crypto_amount: event.data.crypto_amount,
        crypto_confirmations_needed: event.data.crypto_confirmations_needed,
        status: event.data.status,
        title: event.data.product.title,
        price: event.data.product.price_display,
        currency: event.data.product.currency,
        userId: user.id,
        productId: product.id,
      },
    });
    if (user.role !== UserRole.CUSTOMER) {
      await db.user.update({
        where: { id: user.id },
        data: { role: UserRole.CUSTOMER },
      });
    }

    return NextResponse.json({ status: 200 });
  }
}
