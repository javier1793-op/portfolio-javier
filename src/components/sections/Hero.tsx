"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // Configuración de animación estándar para reutilizar
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden bg-white">
      
      {/* 1. LÍNEA DECORATIVA SUPERIOR (Dot & Line) */}
      <motion.div
        className="absolute top-0 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        
        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
        
        {/* La línea punteada que se dibuja hacia abajo */}
        <motion.div
          className="w-[1px] h-28 bg-black opacity-20 mt-1"
          style={{ originY: 0 }} // Punto de origen arriba para que crezca hacia abajo
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.5 }}
        />
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
      </motion.div>

    
      {/* 2. TÍTULO: Cambiamos 4vw por tamaños fijos responsivos */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-[4vw] font-bold tracking-tighter text-black leading-none uppercase mb-4 select-none text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
      >
        Javier <br className="md:hidden" /> Alejandro
      </motion.h1>

      {/* 3. DESCRIPCIÓN: Ajustamos el max-w para que no pegue en los bordes */}
      <motion.div
        className="text-center w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] flex flex-col items-center px-6"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase mb-4">
          Analista en Sistemas & <br className="md:hidden" /> Full Stack Developer
        </span>
        
        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
          Desarrollo aplicaciones web enfocadas en la calidad, la escalabilidad y la experiencia del usuario.
        </p>
      </motion.div>

      {/* 4. FLECHA DE SCROLL ORIGINAL (Estilo Ratón Minimalista) */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center gap-3 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }} // Aparece al final
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} // Scroll suave al Hero
      >
        <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase">
          Sobre mi
        </span>
        
        {/* El "ratón" o flecha original */}
        <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center pt-2">
          {/* El punto que sube y baja dentro del ratón */}
          <motion.div
            className="w-1 h-1 bg-gray-400 rounded-full"
            animate={{ 
              y: [0, 8, 0], // Sube, baja y vuelve
              opacity: [1, 0, 1] // Se desvanece al bajar
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>

    </section>
  );
}