import { cn } from "@nextui-org/react";
import { ReactNode } from "react";

export const Main = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </main>
  );
};
