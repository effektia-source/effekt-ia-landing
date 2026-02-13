import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EFFEKT IA",
  description: "Sistemas inteligentes para hacer crecer tu negocio",
  verification: {
    google: "tFn0cDNbv_rurEXVhnge36CtyGIWd8tyv4OC8ko2YVo",
  },
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

