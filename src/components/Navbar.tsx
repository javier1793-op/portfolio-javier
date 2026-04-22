"use client";
import { useState, useEffect } from "react";
import { Mail, Code2, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "SOBRE MÍ", href: "#about", id: "about" },
    { name: "SERVICIOS", href: "#servicies", id: "servicies" },
    { name: "PROYECTOS", href: "#projects", id: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full min-h-[70px] md:min-h-[90px] z-[100] bg-white border-b border-[var(--border)]">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex items-center justify-between md:grid md:grid-cols-[90px_1fr_90px] h-[70px] md:h-[90px]">
        
        {/* 1. LADO IZQUIERDO: LOGO (Siempre negro) */}
        <Link href={"#home"} onClick={() => {setActiveSection("home"); setIsMenuOpen(false);}} className="no-underline text-inherit h-full">
          <div className="bg-[var(--foreground)] h-full w-[70px] md:w-[90px] text-[var(--background)] flex flex-col justify-center items-center">
            <Code2 className="text-white w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Javier</span>
          </div>
        </Link>

        {/* 2. CENTRO: MENÚ DESKTOP (Oculto en Mobile) */}
        <nav className="hidden md:flex h-full justify-center items-center">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name} className="relative flex items-center">
                  <Link 
                    href={link.href} 
                    onClick={() => setActiveSection(link.id)}
                    className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] transition-all duration-300 ${
                      isActive ? "text-black" : "text-gray-400 hover:text-black"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 bg-green-500 rounded-full transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}></span>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 3. LADO DERECHO: MAIL + HAMBURGUESA (Mobile) */}
        <div className="flex items-center gap-4  h-full px-6 md:px-0">
            {/* Mail siempre visible, pero en desktop tiene el bloque negro */}
            <Link href="mailto:javier17utn@gmail.com" className="md:hidden mr-6">
                <Mail className="text-black w-6 h-6" />
            </Link>
            
            {/* Hamburguesa solo Mobile */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-black transition-transform active:scale-90"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mail Bloque Negro solo Desktop */}
            <Link href="mailto:javier17utn@gmail.com" className="hidden md:flex no-underline text-inherit h-full">
                <div className="bg-[var(--foreground)] h-full w-[90px] text-[var(--background)] flex flex-col justify-center items-center border-l border-white/10">
                    <Mail className="text-white w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Contacto</span>
                </div>
            </Link>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Foto 2: Fondo Negro) */}
      <div className={`
        absolute top-[70px] left-0 w-full bg-[#111111] text-white transition-all duration-500 ease-in-out overflow-hidden z-[90]
        ${isMenuOpen ? "max-h-[400px] opacity-100 border-b border-white/10" : "max-h-0 opacity-0"}
      `}>
        <ul className="flex flex-col items-center gap-8 py-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-[13px] font-bold tracking-[0.3em] uppercase transition-colors ${
                    isActive ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;