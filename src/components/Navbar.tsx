"use client";
import React, { useState } from "react";
import { Mail, Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import { div } from "framer-motion/client";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
  ];

  return (
    <div className="flex justify-between items-center fixed w-full min-h-[90px] z-50 bg-white border-b border-[var(--border)] py-4">
      <Link href={"#home"} className="no-underline text-inherit">
        <div className="z-10 pl-8 bg-[var(--foreground)] min-h-[90px] min-w-[90px] text-[var(--background)] flex flex-col justify-center items-center">
          <Code2 className="text-white w-6 h-6" />
          <span>Javier</span>
        </div>
      </Link>

      <nav className="absolute left-1/2 -translate-x-1/2">menu</nav>

      <div className="ml-auto z-10">mail</div>
    </div>
  );
};

export default Navbar;
