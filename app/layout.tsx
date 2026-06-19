import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skaut Release · Notas de versión",
  description:
    "Notas de versión y documentación de los lanzamientos de Skaut IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <header className="sticky top-0 z-50 border-b border-[#1f1f22] bg-black/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              Skaut <span className="text-muted">Release</span>
            </Link>
            <a
              href="https://github.com/Solano08/SkautIA"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              Repositorio
            </a>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
        <footer className="border-t border-[#1f1f22]">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-xs text-muted">
            <span>Skaut IA · Notas de versión</span>
            <span>David Solano</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
