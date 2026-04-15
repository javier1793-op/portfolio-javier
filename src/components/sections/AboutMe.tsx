"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Systems Analysis",
    "UI/UX Design",
    "WooCommerce Expert",
    "WordPress Architecture",
    "SQL/PostgreSQL",
  ];

  return (
    <section className="relative bg-white py-24 px-8 overflow-hidden">
      {/* 1. SECCIÓN DE LA FOTO (Reemplazando el círculo gris) */}
      <div className="flex justify-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          // Este contenedor le da la forma curva y el borde sutil
          className="relative w-56 h-64 bg-gray-50 rounded-t-full flex items-end justify-center overflow-hidden border border-gray-100 shadow-inner"
        >
          {/* Imagen de Perfil Optimizada */}
          <Image
            src="/img/perfil.jpg"
            alt="Javier - Analista en Sistemas & Full Stack Developer"
            width={400} // Un ancho base para optimizar
            height={400} // Un alto base para optimizar
            quality={90} // Alta calidad
            priority={true} // Se carga rápido porque está arriba
            className="absolute bottom-0 object-cover  scale-110" // Escala un poco para que llene el contenedor curvo
          />

          {/* Un degradado sutil opcional abajo para fundir la foto con el fondo */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-30"></div>
        </motion.div>
      </div>

      {/* 2. Contenido de Texto */}
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight"
        >
          Hola! Soy Javier, <br />
          <span className="text-gray-400">
            Analista en Sistemas & Developer
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed mb-12"
        >
          Como Analista en Sistemas, mi enfoque va más allá del código: diseño
          arquitecturas que resuelven problemas de negocio. Gestiono plataformas
          complejas de E-commerce con WooCommerce, optimizando el rendimiento y
          la seguridad para garantizar operaciones estables. Hoy, evoluciono esa
          experiencia hacia el desarrollo Full Stack moderno, integrando el
          poder de Next.js con soluciones inteligentes basadas en AI Agents para
          crear la próxima generación de aplicaciones web.
        </motion.p>

        {/* 3. Skills (Sin porcentajes, solo tags) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-2 border border-gray-100 rounded-full text-xs font-bold tracking-widest text-gray-400 hover:text-black hover:border-black transition-all duration-300 uppercase cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* 4. Detalle de Firma/Icono (Como en la foto) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 opacity-20 hover:opacity-100 transition-opacity"
        >
          <span className="font-serif text-3xl select-none italic">
            Javier.
          </span>
        </motion.div>
        <div className="w-full flex justify-center items-center">
            <Image
          src="/img/firma.png"
          alt="Javier - Firma"
          width={300} // Un ancho base para optimizar
          height={300}
          quality={90} // Alta calidad
          priority={true} // Se carga rápido porque está arriba
        /> 
        </div>
       
      </div>
    </section>
  );
};

export default AboutMe;
