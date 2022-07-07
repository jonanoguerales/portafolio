import React from "react";
import Testimonials from "./components/Testimonial";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Starter from "./pages/Starter";
import About from "./pages/About";
import Why from "./pages/Why";
import Blogs from "./pages/Blogs";
import Footer from "./pages/Footer";
import { motion } from "framer-motion";


function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Navbar />
      <ScrollToTop />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
