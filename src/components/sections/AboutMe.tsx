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
    <section className="relative bg-white py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      {/* 1. SECCIÓN DE LA FOTO */}
      <div className="flex justify-center mb-12 md:mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-48 h-56 md:w-56 md:h-64 bg-gray-50 rounded-t-full flex items-end justify-center overflow-hidden border border-gray-100 shadow-inner"
        >
          <Image
            src="/img/perfil.jpg"
            alt="Javier - Analista en Sistemas & Full Stack Developer"
            width={400}
            height={400}
            quality={90}
            priority={true}
            className="absolute bottom-0 object-cover scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-30"></div>
        </motion.div>
      </div>

      {/* 2. Contenido de Texto */}
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-2 md:gap-4 px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-8 tracking-tight"
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
          className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-12"
        >
          Como Analista en Sistemas, mi enfoque va más allá del código: diseño
          arquitecturas que resuelven problemas de negocio. Gestiono plataformas
          complejas de E-commerce con WooCommerce, optimizando el rendimiento y
          la seguridad. Hoy, evoluciono esa experiencia hacia el desarrollo Full Stack moderno con AI Agents.
        </motion.p>

        {/* 3. Skills (Optimizado para móvil con px-4 y text-[10px]) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-1.5 md:px-6 md:py-2 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-gray-400 hover:text-black hover:border-black transition-all duration-300 uppercase cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* 4. Detalle de Firma y Imagen de Firma (Responsive width) */}
        <div className="w-full flex flex-col justify-center items-center mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 opacity-20"
          >
            <span className="font-serif text-2xl md:text-3xl italic">Javier.</span>
          </motion.div>
          
          <div className="w-[200px] md:w-[300px]">
            <Image
              src="/img/firma.png"
              alt="Javier - Firma"
              width={300}
              height={100} // Ajustado para que no ocupe un cuadrado gigante
              quality={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;