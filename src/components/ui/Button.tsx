"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary-dark/30",
  secondary:
    "bg-secondary text-white hover:bg-slate-800",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-foreground hover:bg-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer font-[family-name:var(--font-heading)]";
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <a href={href} className={styles}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
