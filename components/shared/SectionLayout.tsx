interface SectionLayoutProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

export default function SectionLayout({
  children,
  bg = "bg-white",
  className = "",
}: SectionLayoutProps) {
  return (
    <section className={`${bg} py-8 md:py-16 ${className}`}>
      <div className="max-w-[1640px] mx-auto px-8">{children}</div>
    </section>
  );
}
