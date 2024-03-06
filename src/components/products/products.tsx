import { ProductTable } from "~/components/products/productTable";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export async function Products() {
  const session = await auth();
  if (!session?.user.transactions.length) {
    await api.product.createStartProduct.mutate();
  }

  return (
    <section>
      <main>
        <div className="h-full lg:px-6">
          <div className="mx-auto flex w-full max-w-[90rem] flex-wrap justify-center gap-4  px-4 py-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
            <div className="mt-6 flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Products</h3>
                <ProductTable products={session?.user.products ?? []} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
