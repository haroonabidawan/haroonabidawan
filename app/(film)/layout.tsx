import { AppNav } from "@/components/app-nav";

export default function FilmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-20 flex h-dvh max-h-dvh flex-col overflow-hidden bg-background text-foreground">
      {/* Main frame: centered content above fixed bottom nav */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-5 md:px-8">
        {children}
      </div>
      <AppNav />
    </div>
  );
}
