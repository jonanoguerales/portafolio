import React from "react";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import Perfil from "../img/perfil.jpg";
import { headerAnimation, imageAnimation } from "../utils/Animations";
import "../css/sections/Home.scss";

export default function Home() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element} id="inicio">
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
            ¡Hola!<br/>Soy Jonathan Noguerales Albuquerque<br/>FullStack Developer 
          </h1>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={Perfil} alt="Imagen Principal" />
        </motion.div>
      </div>
    </div>
  );
}
