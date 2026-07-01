import type { ReactNode } from "react";

export function BentoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}
