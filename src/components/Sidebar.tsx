"use client";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Sidebar = () => {
  const socials = [
    {
      icon: <BsGithub size={20} />,
      href: "https://github.com/javier1793-op",
      label: "GitHub",
    },
    {
      icon: <BsLinkedin size={20} />,
      href: "https://www.linkedin.com/in/javier-alejandro-ruiz-diaz-2ba4943b8/",
      label: "LinkedIn",
    },
    {
      icon: <BsWhatsapp size={20} />,
      href: "https://wa.me/543704264610",
      label: "Whatsapp",
    },
  ];

  return (
    <aside className="fixed left-0 top-[90px] w-[90px] h-[calc(100vh-90px)] border-r border-[var(--border)] bg-white z-40 hidden md:flex flex-col items-center justify-around py-12 pb-32">
      {/* Texto Vertical (Opcional, queda muy bien) */}
      <div className="rotate-180 [writing-mode:vertical-lr] flex items-center gap-4">
        <span className="text-[10px] font-bold tracking-[0.3em] text-black uppercase">
          Social
        </span>
        <div className="w-[1px] h-12 bg-gray-200"></div>
      </div>

      {/* Iconos Sociales */}
      <div className="flex flex-col gap-8 ">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition-colors duration-300"
            aria-label={social.label}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
