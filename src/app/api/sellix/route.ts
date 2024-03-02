import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

export async function POST(req: NextRequest) {
  const event = await req.json();
  const email = event.data.customer_email;

  const user = await db.user.findUnique({
    where: { email },
  });

  if (event.event !== "order:paid") return NextResponse.json({ status: 404 });
  console.log(event.event);
  if (event.event === "order:paid") {
    if (!user) {
      return NextResponse.json({ status: 404 });
    }

    const product = await db.product.create({
      data: {
        shop: event.data.name,
        type: event.data.product_type,
        quantity: event.data.quantity,
        serial: event.data.serials[0],
        title: event.data.product.title,
        description: event.data.product.description,
        price: event.data.product.price_display,
        userId: user.id,
      },
    });

    const transaction = await db.transaction.create({
      data: {
        shop: event.data.name,
        gateway: event.data.gateway,
        crypto_address: event.data.crypto_address,
        crypto_amount: event.data.crypto_amount,
        crypto_confirmations_needed: event.data.crypto_confirmations_needed,
        status: event.data.status,
        price: event.data.product.price_display,
        currency: event.data.product.currency,
        userId: user.id,
        productId: product.id,
      },
    });

    db.user.update({
      where: { id: user.id },
      data: {
        role: UserRole.CUSTOMER,
      },
    });

    return NextResponse.json({ status: 200 });
  }
}
