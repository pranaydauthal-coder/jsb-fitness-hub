import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Kriti's Dental Studio",
  description: "Premium dental care in New Delhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}