import type { ReactNode } from "react";

export function SlideLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-dark sm:text-xs sm:tracking-[0.28em]">
      {children}
    </p>
  );
}
