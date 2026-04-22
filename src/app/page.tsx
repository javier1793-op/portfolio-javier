import Footer from "@/components/Footer";
import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
  
    <div className="flex flex-col md:flex-row"> 
     
      <main className="relative flex flex-col min-h-screen w-full md:w-[70vw]  sm:px-10 md:px-0">
        <ScrollProgress />

        <section
          id="home"
          className="h-screen flex items-center justify-center border-b border-gray-100  md:px-0"
        >
          <Hero />
        </section>

        <section
          id="about"
          className="min-h-screen py-20 flex items-center justify-center border-b border-gray-100 px-6 md:px-0"
        >
          <AboutMe />
        </section>

        <section
          id="servicies"
          className="min-h-screen py-20 flex items-center justify-center border-b border-gray-100 px-6 md:px-0"
        >
          <Services />
        </section>

        <section
          id="projects"
          className="py-20 flex items-center justify-center px-6 md:px-0"
        >
          <Projects />
        </section>
        <br />
        <section
         
          className="py-20 flex items-center  justify-center px-6 md:px-0"
        >
         <Footer/>
        </section>
      </main>

      
    </div>
  );
}