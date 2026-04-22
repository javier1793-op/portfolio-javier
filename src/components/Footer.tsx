"use client";
import { Code2} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white w-full flex justify-center  py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        
        {/* PARTE SUPERIOR: Logo y Redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
          
          {/* LOGO */}
          <Link href="#home" className="flex flex-col gap-1 justify-center items-center md:items-start group">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code2 className="text-green-500 w-6 h-6" />
              <span className="text-xl font-bold tracking-tighter uppercase">Javier Alejandro</span>
            </div>
            <p className="text-gray-500 text-xs tracking-[0.2em] font-medium uppercase text-center md:text-left">
              Analista en Sistemas & Full Stack Developer
            </p>
          </Link>

        </div>

        
      </div>
    </footer>
  );
};

export default Footer;