"use client";
import { motion } from "framer-motion";

const RightSidebar = () => {
  return (
    <aside className="fixed right-0 top-[90px] w-[30vw] h-[calc(100vh-90px)] border-l border-[var(--border)] bg-white z-40 hidden md:flex flex-col items-center justify-end overflow-hidden">
      
      {/* Transformamos el div en motion.div para la animación */}
      <motion.div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://w0.peakpx.com/wallpaper/250/646/HD-wallpaper-kirito-anime-fighting.jpg')",
        }}
        // ESTADO INICIAL: 100px abajo y transparente
        initial={{ y: "100%", opacity: 0 }} 
        // ESTADO FINAL: Posición original y visible
        animate={{ y: 0, opacity: 1 }}
        // CONFIGURACIÓN DE LA ANIMACIÓN
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1], // Esto es un "expo out" que se ve MUY pro
          delay: 0.2 // Un pequeño delay para que el marco cargue primero
        }}
      />

    </aside>
  );
};

export default RightSidebar;