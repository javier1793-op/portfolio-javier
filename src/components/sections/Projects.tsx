"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
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
    <section className="py-24 px-10 md:px-25 h-auto">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="flex items-center justify-center  gap-4 ">
          {/* Línea izquierda */}

          <div className="flex items-center w-full max-w-xs ">
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            <div className="h-px bg-[var(--border)] w-full"></div>
          </div>

          {/* Texto */}
          <h2 className="mx-6 text-2xl font-semibold whitespace-nowrap">
            Proyectos
          </h2>

          {/* Línea derecha */}
          <div className="flex items-center w-full max-w-xs">
            <div className="h-px bg-[var(--border)] w-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          </div>
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* IMAGEN */}
              <div className="w-full h-[260px] bg-gray-200 overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">
                    Imagen del proyecto
                  </span>
                )}
              </div>

              {/* TEXTO */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LINEA CON PUNTOS */}
        <div className="flex items-center justify-center  gap-4 ">
          {/* Línea izquierda */}

          <div className="flex items-center w-full max-w-xs ">
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            <div className="h-px bg-[var(--border)] w-full"></div>
          </div>

          {/* Texto */}
          <h2 className="mx-6 text-2xl font-semibold whitespace-nowrap">
            ¿Listo para llevar tu idea a producción?
          </h2>

          {/* Línea derecha */}
          <div className="flex items-center w-full max-w-xs">
            <div className="h-px bg-[var(--border)] w-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          </div>
        </div>
        <div className="w-full flex justify-center mb-8">
          <ButtonContact/>
        </div>
      </div>
    </section>
  );
}
