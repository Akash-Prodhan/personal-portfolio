import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { Contact } from "@/components/main/Contact";


export default function Home() {
  return (
    
    <main className="h-full w-full flex flex-col gap-10 sm:gap-20 items-center ">
      <Hero />
      <Skills />
      <Encryption />
      <Projects />
      <Contact />
    </main>
  );
}
