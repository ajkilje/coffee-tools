import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <main className="mx-auto flex max-w-5xl flex-col gap-6 px-8 pt-4 pb-8">{children}</main>;
}
