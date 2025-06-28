import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Experience from "@/components/experience/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" >
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer />
    </>
  );
}
