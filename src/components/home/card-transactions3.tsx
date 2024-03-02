import { Card, CardBody } from "@nextui-org/react";
import { Community } from "~/components/icons/community";
import { auth } from "~/server/auth";

export async function CardTransactions3() {
  const session = await auth();

  return (
    <Card className="w-full rounded-xl bg-success px-3 shadow-md xl:max-w-sm">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Transactions</span>
            <span className="text-xs text-white">
              {session?.user.transactions.length} Transactions
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 py-2">
          <span className="text-xl font-semibold text-white">
            {session?.user.transactions.length}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
