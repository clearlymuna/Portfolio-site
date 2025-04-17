import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
