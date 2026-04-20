import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-[calc(100vw-30vw)]">
      {/* secciones */}
      <section id="home" className="h-screen flex items-center justify-center border-b border-white/10">
       <Hero/>
      </section>
      
      <section id="about" className="h-screen flex items-center justify-center border-b border-white/10">
        <AboutMe/>
      </section>
      <section id="servicies" className="h-screen flex items-center justify-center border-b border-white/10">
        <Services/>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">Proyectos</h2>
      </section>
    </main>
  );
}