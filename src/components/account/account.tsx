import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { AccountSend } from "~/components/account/accountSend";
import { auth } from "~/server/auth";

export async function Account() {
  const session = await auth();
  const email = session?.user.email;
  return (
    <section>
      <main>
        <div className="h-full lg:px-6">
          <div className="mx-auto flex w-full max-w-[90rem] flex-wrap justify-center gap-4  px-4 py-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
            <div className="mt-6 flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Account</h3>
                <Card className="w-full ">
                  <CardHeader className="flex gap-3">
                    <Avatar src={session?.user.image!} radius="md" />
                    {session?.user.name}
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="flex w-full flex-wrap justify-between gap-5">
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="ID"
                        defaultValue={session?.user.id}
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="Name"
                        defaultValue={session?.user.name!}
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="email"
                        label="Email"
                        defaultValue={session?.user.email!}
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="Role"
                        defaultValue={session?.user.role}
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="OAuth"
                        defaultValue={session?.user.isOAuth ? "true" : "false"}
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="Verified"
                        defaultValue={
                          session?.user.emailVerified
                            ? session.user.emailVerified.toString()
                            : "Not Verified"
                        }
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="Created At"
                        defaultValue={session?.user.createdAt.toString()}
                        className="max-w-xs"
                      />
                      <Input
                        labelPlacement="outside"
                        isDisabled
                        type="text"
                        label="Products"
                        defaultValue={session?.user.products.length.toString()}
                        className="max-w-xs"
                      />
                    </div>
                  </CardBody>
                  <Divider />
                  <CardFooter className="w-full justify-between">
                    {!session?.user.emailVerified && (
                      <AccountSend email={email!} />
                    )}
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
