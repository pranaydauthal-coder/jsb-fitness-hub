import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSB Academy | Fitness Verse",
  description: "The ultimate ecosystem for fitness education and holistic IBS recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#09090b] text-zinc-50">
        {children}
      </body>
    </html>
  );
}