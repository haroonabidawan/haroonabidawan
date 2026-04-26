export function PageShell({
  children,
  className = "",
  centered = true,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  /** When false, content aligns to the top so flex children can use flex-1 (e.g. stepped scenes). */
  centered?: boolean;
}>) {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col overflow-hidden px-5 md:px-8 ${centered ? "items-center justify-center" : ""}`}
    >
      <div className={`mx-auto w-full max-w-3xl ${className}`}>{children}</div>
    </div>
  );
}
