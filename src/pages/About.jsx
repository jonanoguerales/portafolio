import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../css/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="acerca" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="Acerca de mí" color="blue" />
          <p>
            Hola, mi nombre es Jonathan Noguerales Alburquerque y soy un desarrollador Full Stack Web Developer junior 
            que esta en pleno aprendizaje, con ganas de aprender algo nuevo cada dia y asi aumentar los conocimientos obtenidos,
            o bien, aprender algo nuevo.
          </p>
          <p>
            Me encanta colaborar, trabajar en equipo y sacar los proyectos adelante.
          </p>
          <a href="pdf" target="_blank"><Button content="ver CV" /></a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
