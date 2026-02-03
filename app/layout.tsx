import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostafa.AI - Portfolio",
  description: "AI Automation Expert | Building intelligent agents and custom automation pipelines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
