interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-card rounded-2xl border border-card-border p-6 ${
        hover ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
