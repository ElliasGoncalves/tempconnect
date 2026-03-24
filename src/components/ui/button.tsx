import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary" | "ghost";
};

export function Button({
  className = "",
  variant = "default",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border bg-background hover:bg-muted",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    ghost: "hover:bg-muted",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || variants.default} ${className}`}
      {...props}
    />
  );
}

export default Button;