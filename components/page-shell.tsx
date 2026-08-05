import { AppNav } from "@/components/app-nav";

export function PageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-20 min-h-dvh bg-background text-foreground">
      <div className="page-shell mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-8 md:px-8 md:pt-10">
        {children}
      </div>
      <AppNav />
    </div>
  );
}
