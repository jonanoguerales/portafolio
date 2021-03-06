import React from "react";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portafolio from "./pages/Portafolio";
import Footer from "./pages/Footer";
import { motion } from "framer-motion";
import { Contact } from "./pages/Contact";


function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Navbar />
      <ScrollToTop />
      <Home />
      <About />
      <Skills />
      <Portafolio />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
