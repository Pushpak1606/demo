import { cn } from "@/lib/utils";

export function Display({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-display tracking-tight text-foreground font-extrabold", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-h1 tracking-tight text-foreground font-bold", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-h2 tracking-tight text-foreground font-semibold", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-h3 tracking-tight text-foreground font-semibold", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn("text-h4 tracking-tight text-foreground font-semibold", className)}
      {...props}
    >
      {children}
    </h4>
  );
}
