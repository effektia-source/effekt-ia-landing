import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EFFEKT IA",
  description: "Sistemas inteligentes para hacer crecer tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
