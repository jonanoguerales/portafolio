import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import { reveal } from "../utils/Animations";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../css/sections/About.scss";

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
          <Title title="Acerca de mí" colorFondo="black" />
          <p>
          Hola, mi nombre es Jonathan Noguerales Alburquerque y soy un desarrollador Full Stack Web Developer que está en pleno aprendizaje, con ganas de aprender algo nuevo cada día y desarrollarme profesionalmente.
          Me considero una persona autodidacta, con entusiasmo y pasión en lo que hago, con ganas de superarme diariamente.
          Me encantaría colaborar y trabajar en un gran equipo, en el cual poder aportar cosas nuevas y sacar proyectos adelante.
          Estoy seguro de que me integraré bien en poco tiempo.
          </p>
          <p>
          Me encantaría colaborar y trabajar en un gran equipo, en el cual poder aportar cosas nuevas y sacar proyectos adelante.
          </p>
          <p>
          Estoy seguro de que me integraré bien en poco tiempo.
          </p>
          <a href="pdf" target="_blank"><div className="botonCV"><Button content="ver CV" /></div></a>
          <div className="icons">
            <div className="icon">
              <a href="https://www.linkedin.com/in/jonathannogueralesalburquerque" target="_blank">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/jonanoguerales" target="_blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </motion.div>
      </div >
    </div >
  );
}

export default About;
