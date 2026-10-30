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
  // Server-side console log (visible in your terminal/Vercel logs)
  console.log("[GSB-DEBUG] RootLayout rendering on server/build time");

  return (
    <html lang="en">
      <body className="antialiased bg-[#09090b] text-zinc-50">
        {/* Client-side console verification script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("[GSB-DEBUG] Client layout loaded successfully. Tailwind active:", document.styleSheets.length > 0);`,
          }}
        />
        {children}
      </body>
    </html>
  );
}