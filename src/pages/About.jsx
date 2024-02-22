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
          Hola, soy Jonathan Noguerales Alburquerque, un desarrollador Full Stack en constante aprendizaje y crecimiento profesional. 
          Me caracterizo por ser autodidacta, apasionado y entusiasta en mi trabajo, siempre buscando superarme día a día.
          </p>
          <br/>
          <p>
          Me encantaría formar parte de un equipo dinámico donde pueda contribuir con nuevas ideas y llevar proyectos hacia adelante. 
          </p>
          <br/>
          <p>
          Estoy seguro de que podré integrarme rápidamente y aportar valor desde el primer día.
          </p>
          <a href="pdf" target="_blank"><div className="botonCV"><Button content="ver CV"  style={{margin: '10px 0'}}/></div></a>
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
