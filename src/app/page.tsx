export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* secciones */}
      <section id="home" className="h-screen flex items-center justify-center border-b border-white/10">
        <h1 className="text-5xl font-bold">Javier Ruiz Diaz - Full Stack Developer</h1>
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