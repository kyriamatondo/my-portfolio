import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Techs from "./components/Techs";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Techs />
      </div>
      <div className="p-5 md:px-[15%]">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
