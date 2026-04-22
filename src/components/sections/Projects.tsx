"use client";
import { motion } from "framer-motion";
import { ButtonContact } from "../ui/ButtonContact";

const projects = [
  {
    title: "E-commerce & Estrategia Digital - Algarrobo",
    description:
      "Digitalización integral de una fábrica tradicional con +20 años de trayectoria. Implementación de ecosistema WooCommerce, optimización de conversión y gestión de inventario para logística nacional.",
    image:
      "/img/algarrobo.jpg", //
  },
  {
    title: "Desarrollo Web Escalable - Partner España",
    description:
      "Producción y despliegue masivo de más de 50 sitios web para PyMEs españolas bajo estándares europeos. Especialización en diseño con Elementor, optimización de performance y tiempos de entrega críticos.",
    image:
      "/img/españa.jpg", //
  },
  {
    title: "Soporte Técnico & Desarrollo - Barco Agencia",
    description:
      "Consultoría técnica continua y mantenimiento de infraestructura web. Optimización de seguridad, actualizaciones críticas y desarrollo de nuevas funcionalidades para clientes corporativos de la agencia.",
    image:
      "/img/barco.png", //
  },
  {
    title: "IT Infrastructure & Hardware Solutions",
    description:
      "Soporte técnico avanzado a nivel de hardware y sistemas. Solución de fallas críticas en BIOS, micro-soldadura, mantenimiento de servidores y optimización de estaciones de trabajo de alto rendimiento.",
    image:
      "/img/bios.webp", //
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-20 h-auto">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* CABECERA: Adaptada para que no se rompa en móvil */}
        <div className="flex items-center justify-center w-full gap-2 md:gap-4">
          <div className="hidden sm:flex items-center w-full max-w-[100px] md:max-w-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            <div className="h-px bg-gray-100 w-full"></div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap uppercase tracking-widest">
            Proyectos
          </h2>

          <div className="hidden sm:flex items-center w-full max-w-[100px] md:max-w-xs">
            <div className="h-px bg-gray-100 w-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          </div>
        </div>

        {/* GRID: 1 columna en móvil, 2 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* IMAGEN: Altura ajustable para móvil */}
              <div className="w-full h-[220px] md:h-[260px] bg-gray-50 overflow-hidden flex items-center justify-center border border-gray-100">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                  />
                ) : (
                  <span className="text-gray-400 text-xs uppercase tracking-widest">
                    Case Study
                  </span>
                )}
              </div>

              {/* TEXTO: Padding lateral para que no pegue al borde */}
              <div className="mt-6 px-2 md:px-0">
                <h3 className="text-base md:text-lg font-bold mb-2 uppercase tracking-tight">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEPARADOR INFERIOR: Texto centrado y multilínea en móvil */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center justify-center w-full gap-4">
             <div className="hidden sm:block h-px bg-gray-100 w-16 md:w-32"></div>
             <h2 className="text-lg md:text-2xl font-semibold text-center px-4 leading-tight">
               ¿Listo para llevar tu idea <br className="sm:hidden" /> a producción?
             </h2>
             <div className="hidden sm:block h-px bg-gray-100 w-16 md:w-32"></div>
          </div>

          <div className="w-full flex justify-center pb-8">
            <ButtonContact />
          </div>
        </div>

      </div>
    </section>
  );
}
