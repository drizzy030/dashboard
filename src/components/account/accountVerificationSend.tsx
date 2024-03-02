"use client";

import { Button } from "@nextui-org/react";
import { toast } from "sonner";
import { api } from "~/trpc/react";

export function AccountVerificationSend({ email }: { email: string }) {
  const {
    mutate: sendVerificationEmail,
    isLoading: sendVerificationEmailIsLoading,
  } = api.auth.sendVerificationEmail.useMutation({
    onSuccess: ({ success }) => {
      toast.success(success);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return (
    <Button
      isLoading={sendVerificationEmailIsLoading}
      onClick={() => sendVerificationEmail({ email })}
    >
      Resend Verification
    </Button>
  );
}
