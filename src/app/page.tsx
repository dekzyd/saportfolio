import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-7xl bg-slate-300/5 mx-auto py-2">
        <About />
        <Divider />
        <Services />
        <Divider />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
