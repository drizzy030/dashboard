import { useRouter } from "next/navigation";
import { TransactionTable } from "~/components/transactions/transactionTable";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export async function Transactions() {
  const session = await auth();
  const router = useRouter();
  if (!session?.user.transactions.length) {
    await api.product.createStartProduct.mutate();
    router.refresh();
  }

  return (
    <section>
      <main>
        <div className="h-full lg:px-6">
          <div className="mx-auto flex w-full max-w-[90rem] flex-wrap justify-center gap-4  px-4 py-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
            <div className="mt-6 flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Transactions</h3>
                <TransactionTable
                  transactions={session?.user.transactions ?? []}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
