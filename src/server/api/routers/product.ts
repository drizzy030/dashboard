import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  createStartProduct: protectedProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const product = await ctx.db.product.create({
      data: {
        shop: "Test Shop",
        type: "SERIALS",
        quantity: 1,
        serial: "DRIZZY-HGF645",
        title: "Spoofer 1 day",
        description: "1 day of the void spoofer",
        price: 10,
        userId: userId!,
      },
    });

    const transaction = await ctx.db.transaction.create({
      data: {
        shop: "Test Shop",
        gateway: "LITECOIN",
        crypto_address: "ltc1qaclv0vtss45nmfxtt2c6qdndzl70cfh6uslx9e",
        crypto_amount: 0.012,
        crypto_confirmations_needed: 3,
        status: "CONFIRMED",
        title: "Spoofer 1 day",
        price: 10,
        currency: "USD",
        userId: userId!,
        productId: product.id,
      },
    });
    return { success: "Created!" };
  }),
});
