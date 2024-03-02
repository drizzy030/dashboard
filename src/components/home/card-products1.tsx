import { Card, CardBody } from "@nextui-org/react";
import { Community } from "~/components/icons/community";
import { auth } from "~/server/auth";

export async function CardProducts1() {
  const session = await auth();
  return (
    <Card className="w-full rounded-xl bg-primary px-3 shadow-md xl:max-w-sm">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Products</span>
            <span className="text-xs text-white">
              {session?.user.products.length} Products
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 py-2">
          <span className="text-xl font-semibold text-white">
            {session?.user.products.length}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
