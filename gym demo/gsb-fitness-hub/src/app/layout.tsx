import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSB Academy & Fitness Verse | Kulbir Singh",
  description: "Elite Fitness, IBS Holistic Cures, and Premium Supplements by Kulbir Singh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
        {children}
      </body>
    </html>
  );
}