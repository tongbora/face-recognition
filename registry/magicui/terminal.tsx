import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type TerminalProps = HTMLAttributes<HTMLDivElement>;

type TerminalLineProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  children: ReactNode;
};

export function Terminal({ className, children, ...props }: TerminalProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-white/10 bg-stone-950 text-stone-100 shadow-2xl",
        className,
      )}
      {...props}
    >
      <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4">
        <span className="h-3 w-3 rounded-full bg-coral" />
        <span className="h-3 w-3 rounded-full bg-primary" />
        <span className="h-3 w-3 rounded-full bg-stone-500" />
      </div>
      <pre className="grid gap-3 overflow-x-auto p-5 font-mono text-sm leading-6">
        {children}
      </pre>
    </div>
  );
}

export function AnimatedSpan({ delay = 0, className, style, children, ...props }: TerminalLineProps) {
  return (
    <span
      className={cn("terminal-fade-in block opacity-0", className)}
      style={{ animationDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </span>
  );
}

export function TypingAnimation({ delay = 0, className, style, children, ...props }: TerminalLineProps) {
  const text = typeof children === "string" ? children : "";
  const animationStyle: CSSProperties & { "--characters": number } = {
    "--characters": text.length || 1,
    animationDelay: `${delay}ms`,
    ...style,
  };

  return (
    <span
      className={cn("terminal-typing block w-fit max-w-full overflow-hidden whitespace-nowrap opacity-0", className)}
      style={animationStyle}
      {...props}
    >
      {children}
    </span>
  );
}
