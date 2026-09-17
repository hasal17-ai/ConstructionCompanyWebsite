import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Stats } from "../components/Stats";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
