import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Dialog({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function DialogTrigger({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export function DialogContent({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function DialogHeader({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function DialogFooter({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function DialogTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={className} {...props} />;
}

export function DialogDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={className} {...props} />;
}