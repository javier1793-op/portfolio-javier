
"use client";
import { Mail, Code2 } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "HOME", href: "#home", active: true },
    { name: "SOBRE MÍ", href: "#about", active: false },
    { name: "PROYECTOS", href: "#projects", active: false },
  ];

  return (
    <header className="flex  items-center fixed top-0 w-full min-h-[90px] z-50 bg-white border-b border-[var(--border)] grid grid-cols-[90px_1fr_90px] items-center">
      
      {/* 1. LADO IZQUIERDO: LOGO */}
      <Link href={"#home"} className="no-underline text-inherit">
        <div className="z-10 pl-8 bg-[var(--foreground)] min-h-[90px] min-w-[90px] text-[var(--background)] flex flex-col justify-center items-center">
          <Code2 className="text-white w-6 h-6" />
          <span>Javier</span>
        </div>
      </Link>

      {/* 2. CENTRO: MENÚ */}
      <nav className="flex h-full justify-center items-center ">
        <ul className="flex items-center gap-16  ">
        {navLinks.map((link) => (
      <li key={link.name} className="flex items-center ">
        <Link 
          href={link.href} 
          className={`flex items-center gap-2 text-[11px] no-underline text-inherit font-bold tracking-[0.2em] no-underline transition-colors ${
            link.active ? "text-black" : "text-gray-400 hover:text-black"
          }`}
        >
          {link.active && <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
          {link.name}
        </Link>
      </li>
    ))}
        </ul>
      </nav>
      {/* 3. LADO DERECHO: MAIL */}
       <Link
          href="mailto:javier17utn@gmail.com"
          className="no-underline text-inherit"
        >
          <div className="z-10 pl-8 bg-[var(--foreground)] min-h-[90px] min-w-[90px] text-[var(--background)] flex flex-col justify-center items-center">
            <Mail className="text-white w-6 h-6" />
            <span>Contacto</span>
          </div>
        </Link>

    </header>
  );
};

export default Navbar;
