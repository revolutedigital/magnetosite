type BadgeVariant = "primary" | "secondary" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary-light text-primary-dark",
  secondary: "bg-surface text-muted",
  outline: "border border-border text-muted",
};

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-[family-name:var(--font-heading)] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
