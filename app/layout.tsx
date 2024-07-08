import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grace Ongchangco - Developer",
  description: "Grace Ongchangco is a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "flex antialiased h-screen overflow-hidden bg-gray-100")}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
