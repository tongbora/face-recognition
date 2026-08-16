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
      <pre className="grid min-w-0 gap-3 overflow-hidden whitespace-pre-wrap p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm">
        {children}
      </pre>
    </div>
  );
}

export function AnimatedSpan({ delay = 0, className, style, children, ...props }: TerminalLineProps) {
  return (
    <span
      className={cn("terminal-fade-in block max-w-full break-all opacity-0", className)}
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
      className={cn("terminal-typing block w-full max-w-full overflow-hidden whitespace-pre-wrap break-all opacity-0", className)}
      style={animationStyle}
      {...props}
    >
      {children}
    </span>
  );
}
