import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fonteñez Joyas",
  description: "100 años celebrando la belleza en cada joya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
