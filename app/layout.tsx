import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAJ INDUSTRIES | Executioner Drone",
  description: "Next-generation tactical autonomous drone system.",
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
