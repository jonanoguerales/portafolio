import React from "react";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import Perfil from "../img/perfil.jpg";
import { headerAnimation, imageAnimation, list, spanVariants, item } from "../utils/Animations";
import "../css/sections/Home.scss";

export default function Home() {
  const [element, controls] = useScroll();

  const text1 = "¡Hola!";
  const text2 = "Soy Jonathan Noguerales Albuquerque";
  const text3 = "FullStack Developer"

  return (
    <div className="main-container" ref={element} id="inicio">
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.4, type: "tween" }}
        >
          <motion.h1 variants={list} initial="hidden" animate="visible">
            {text1.split("").map((Letter, id) => (
                <motion.span variants={item}>
                  <span key={id}>
                    {Letter}
                  </span>
                </motion.span>
            ))}
          </motion.h1>
          <motion.h1 variants={list} initial="hidden" animate="visible">
            {text2.split("").map((Letter, id) => (
                <motion.span variants={item}>
                  <span key={id}>
                    {Letter}
                  </span>
                </motion.span>
            ))}
          </motion.h1>
          <motion.h1 variants={list} initial="hidden" animate="visible">
            {text3.split("").map((Letter, id) => (
                <motion.span variants={item}>
                  <span key={id}>
                    {Letter}
                  </span>
                </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={Perfil} alt="Imagen Principal" />
        </motion.div>
      </div >
    </div >
  );
}
