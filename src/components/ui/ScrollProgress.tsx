"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    /* 1. top-[80px]: Ajustalo según el alto de tu Navbar para que no lo tape.
       2. right-0: Lo pega al borde derecho del contenedor relativo.
       3. h-[calc(100%-80px)]: Para que no se pase del final de la página.
    */
    <div className="absolute right-0 top-[80px] h-[calc(100%-80px)] w-[3px] bg-gray-100/10 z-40 hidden md:block">
      <motion.div
        className="w-full h-full bg-[#00D154] origin-top"
        style={{ scaleY }}
      />
    </div>
  );
};