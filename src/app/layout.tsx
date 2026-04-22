import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter= Inter({
  subsets:["latin"],
  variable: "--font-inter"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Javier Ruiz Diaz | Full Stack Developer",
  description: "Analista en Sistemas y Desarrollador Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#111111]`}>
        <Navbar />
        
        {/* Ocultamos las barras laterales en móviles */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <div className="hidden md:block">
          <RightSidebar />
        </div>

        {/* El contenido principal debe ocupar el 100% en móvil */}
        <main className="w-full md:pl-[90px] md:pr-[90px] pt-[90px]">
          {children}
          
        </main>
      </body>
    </html>
  );
}