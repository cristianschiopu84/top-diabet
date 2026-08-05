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
    "bg-gradient-to-r from-primary to-[#0f8aa3] text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  secondary:
    "bg-white text-primary ring-1 ring-primary/20 hover:bg-light-gray hover:ring-primary/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  white:
    "bg-white text-primary shadow-md shadow-slate-900/10 hover:bg-light-gray hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "bg-transparent text-foreground ring-1 ring-border hover:bg-light-gray",
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
  const classes = `inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

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
