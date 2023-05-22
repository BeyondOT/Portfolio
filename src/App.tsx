import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./sass/main.scss";

import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import HeroParticles from "./components/particles/heroParticles";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projets/Projects";

function App() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    loader?.setAttribute("class", "loader closed");
    loader?.addEventListener("animationend", () => {
      loader.remove();
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content-wrapper" data-aos="fade-in">
        <HeroParticles />
        <Hero />
        <About />

        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
