"use client";
import { motion } from "framer-motion";
import { BsWordpress, BsCodeSlash } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: <BsWordpress size={28} />,
    title: "WordPress & E-commerce",
    description:
      "Desarrollo de sitios web en WordPress enfocados en rendimiento, escalabilidad y experiencia de usuario. Implementación, mantenimiento y optimización continua de proyectos digitales.",
  },
  {
    icon: <BsCodeSlash size={28} />,
    title: "Custom Web Apps",
    description:
      "Desarrollo de aplicaciones modernas y sistemas a medida.Diseño y construcción de software robusto con Next.js y arquitecturas preparadas para crecer. Creación de paneles de administración, sistemas multitenant y herramientas personalizadas que automatizan el flujo de trabajo de tu empresa.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "IT Infrastructure & Support",
    description:
      "Continuidad operativa y seguridad de hardware.Mantenimiento preventivo y correctivo de estaciones de trabajo y servidores. Diagnóstico avanzado a nivel de componentes (BIOS, Motherboard) y configuración de redes para asegurar que la infraestructura física de tu negocio sea tan sólida como el software.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-20 ">
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-6">
        <div className="flex items-center justify-center mb-16 gap-4">
          {/* Línea izquierda */}

          <div className="flex items-center w-full max-w-xs ">
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
            <div className="h-px bg-[var(--border)] w-full"></div>
          </div>

          {/* Texto */}
          <h2 className="mx-6 text-2xl font-semibold whitespace-nowrap">
            Servicios
          </h2>

          {/* Línea derecha */}
          <div className="flex items-center w-full max-w-xs">
            <div className="h-px bg-[var(--border)] w-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Icono */}
              <div className="flex flex-col items-center text-center gap-4">
                {/* Icono */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm">
                  {service.icon}
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold">{service.title}</h3>

                {/* Descripción */}
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
