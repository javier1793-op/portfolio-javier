import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="flex ">
      
      <main className="relative flex flex-col min-h-screen w-[70vw]">
        
        {/* La barra ahora se posicionará al final de estos 70vw */}
        <ScrollProgress /> 

        {/* Secciones */}
        <section id="home" className="h-screen flex items-center justify-center border-b border-white/10">
          <Hero/>
        </section>

        <section id="about" className="min-h-screen py-20 flex items-center justify-center border-b border-white/10">
          <AboutMe/>
        </section>

        <section id="services" className="min-h-screen py-20 flex items-center justify-center border-b border-white/10">
          <Services/>
        </section>

        <section id="projects" className="py-20 flex items-center justify-center">
          <Projects/>
        </section>

      </main>

      {/* Aquí es donde estaría tu imagen de Kirito o Sidebar derecho */}
      <aside className="fixed right-0 top-0 w-[30vw] h-screen">
        {/* Tu imagen o componente derecho */}
      </aside>

    </div>
  );
}