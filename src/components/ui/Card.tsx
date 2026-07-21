import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      {title && <h2 className="mb-5 text-xl font-semibold text-[#3B161D]">{title}</h2>}

      <div className="space-y-6">{children}</div>
    </div>
  );
}
