import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="flex ">
      <main className="relative flex flex-col min-h-screen w-[70vw]">
        <ScrollProgress />

        {/* Secciones */}
        <section
          id="home"
          className="h-screen flex items-center justify-center border-b border-white/10"
        >
          <Hero />
        </section>

        <section
          id="about"
          className="min-h-screen py-20 flex items-center justify-center border-b border-white/10"
        >
          <AboutMe />
        </section>

        <section
          id="servicies"
          className="min-h-screen py-20 flex items-center justify-center border-b border-white/10"
        >
          <Services />
        </section>

        <section
          id="projects"
          className="py-20 flex items-center justify-center"
        >
          <Projects />
        </section>
      </main>

      <aside className="fixed right-0 top-0 w-[30vw] h-screen"></aside>
    </div>
  );
}
