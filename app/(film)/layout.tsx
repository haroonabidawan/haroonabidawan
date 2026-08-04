import { AppNav } from "@/components/app-nav";

export default function FilmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-20 min-h-dvh bg-background text-foreground">
      <div className="film-page mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-8 md:px-8 md:pt-10">
        {children}
      </div>
      <AppNav />
    </div>
  );
}
