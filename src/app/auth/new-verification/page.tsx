"use client";

import { Button } from "@nextui-org/react";
import { notFound, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Main } from "~/app/_components/main";
import { api } from "~/trpc/react";

export default function Home() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) notFound();

  const { mutate: newVerification, isLoading: newVerificationisLoading } =
    api.auth.newVerification.useMutation({
      onSuccess: ({ success }) => {
        toast.success(success);
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  return (
    <section>
      <Main>
        <Button
          isLoading={newVerificationisLoading}
          onClick={() => {
            newVerification({ token });
          }}
        >
          Verify
        </Button>
      </Main>
    </section>
  );
}
