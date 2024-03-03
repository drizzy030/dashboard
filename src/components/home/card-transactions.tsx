import { Avatar, Card, CardBody } from "@nextui-org/react";
import { auth } from "~/server/auth";

export async function CardTransactions() {
  const session = await auth();
  return (
    <Card className=" rounded-xl bg-default-50 px-3 shadow-md">
      <CardBody className="gap-4 py-5">
        <div className="flex justify-center gap-2.5">
          <div className="flex flex-col rounded-xl border-2 border-dashed border-divider px-6 py-2">
            <span className="text-xl font-semibold text-default-900">
              Latest Transactions
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          {session?.user.transactions.map((item) => (
            <div key={item.id} className="grid w-full grid-cols-4">
              <div className="w-full">
                <Avatar
                  isBordered
                  color="default"
                  src={`${session?.user.image}`}
                />
              </div>
              <span className="font-semibold  text-default-900">
                {item.title}
              </span>
              <div>
                <span className="text-sm text-success">
                  {item.price} {item.currency}
                </span>
              </div>
              <div>
                <span className="text-sm text-default-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
