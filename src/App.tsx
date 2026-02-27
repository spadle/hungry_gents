import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SectionDivider />
      <Menu />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
}
