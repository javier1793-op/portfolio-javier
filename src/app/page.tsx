import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-[calc(100vw-30vw)]">
      {/* secciones */}
      <section id="home" className="h-screen flex items-center justify-center border-b border-white/10">
       <Hero/>
      </section>
      
      <section id="about" className="h-screen flex items-center justify-center border-b border-white/10">
        <h2 className="text-3xl">Sobre Mí</h2>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">Proyectos</h2>
      </section>
    </main>
  );
}