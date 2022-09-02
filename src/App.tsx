import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./sass/main.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { HeroParticles } from "./components/particles/heroParticles";
import About from "./components/about/About";

function App() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    loader?.setAttribute("class", "loader closed");
    loader?.addEventListener("animationend", () => {
      console.log("here");

      loader.remove();
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div data-aos="fade-in">
        <HeroParticles />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
