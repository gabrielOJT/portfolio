import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InteractiveBackground from "./components/InteractiveBackground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <InteractiveBackground>
        <HeroSection />
      </InteractiveBackground>
      <Skills />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
