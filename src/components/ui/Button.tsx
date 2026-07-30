import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "white" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-primary via-[#3b82f6] to-secondary text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/25",
  secondary:
    "bg-white/80 text-foreground ring-1 ring-primary/25 backdrop-blur-sm hover:bg-white hover:ring-secondary/40",
  white:
    "bg-white text-primary shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "bg-transparent text-foreground ring-1 ring-border hover:bg-primary/5 hover:ring-primary/35",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
