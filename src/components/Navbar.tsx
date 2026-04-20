"use client";
import { useState, useEffect } from "react";
import { Mail, Code2 } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "SOBRE MÍ", href: "#about", id: "about" },
    { name: "SERVICIOS", href: "#servicies", id: "servicies" },
    { name: "PROYECTOS", href: "#projects", id: "projects" },
  ];

  // Lógica para detectar el scroll y activar el punto verde
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
    <header className="fixed top-0 w-full min-h-[90px] z-50 bg-white border-b border-[var(--border)] grid grid-cols-[90px_1fr_90px] items-center">
      
      {/* 1. LOGO */}
      <Link href={"#home"} onClick={() => setActiveSection("home")} className="no-underline text-inherit">
        <div className="z-10 bg-[var(--foreground)] min-h-[90px] min-w-[90px] text-[var(--background)] flex flex-col justify-center items-center">
          <Code2 className="text-white w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Javier</span>
        </div>
      </Link>

      {/* 2. CENTRO: MENÚ */}
      <nav className="flex h-full justify-center items-center">
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
                  {/* El punto verde con animación sutil */}
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

      {/* 3. LADO DERECHO: MAIL */}
      <Link href="mailto:javier17utn@gmail.com" className="no-underline text-inherit">
        <div className="z-10 bg-[var(--foreground)] min-h-[90px] min-w-[90px] text-[var(--background)] flex flex-col justify-center items-center">
          <Mail className="text-white w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Contacto</span>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;