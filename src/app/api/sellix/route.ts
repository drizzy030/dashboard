import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

export async function POST(req: NextRequest) {
  const event = await req.json();
  const email = event.data.customer_email;

  if (event.event !== "order:paid") return NextResponse.json({ status: 404 });

  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ status: 404 });
  }

  const product = await db.product.create({
    data: {
      name: event.data.product.title,
      description: event.data.product.description,
      price: event.data.product.price,
      quantity: event.data.quantity,
      type: event.data.product_type,
      serials: event.data.serials[0],
      userId: user.id,
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
