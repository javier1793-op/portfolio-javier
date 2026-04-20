"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface ButtonContactProps {
  text?: string;
  link?: string;
  className?: string;
}

export const ButtonContact = ({ 
  text = " Contactame", 
  link = "https://wa.me/543704264610",
  className = "" 
}: ButtonContactProps) => {
  return (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      className={`
        group
        relative
        flex items-center justify-center gap-3
        bg-[#00D154] 
        text-white 
        w-[240px] h-[60px] 
        text-[12px] font-bold tracking-[0.3em] uppercase
        transition-all duration-500
        hover:bg-black
        overflow-hidden
        ${className}
      `}
    >
      <FaWhatsapp size={20} className="relative z-10" />
      <span className="relative z-10">{text}</span>
      
      {/* Efecto de barrido de luz al pasar el mouse */}
      <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    </motion.a>
  );
};