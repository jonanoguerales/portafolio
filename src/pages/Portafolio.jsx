import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../css/sections/Portafolio.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Portafolio() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="portafolio" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Portafolio" lineCenter={false} colorFondo="black"/>
          <p>Proyectos realizados</p>
        </motion.div>
        <div className="blogs">
          <Blog
            className="image1"
            title="Blog Sitio Web"
            subTitle="When there appears an idea to create a startup, have to take into
            account all the risks you will face and evalute them thoughtfullu.
            Also as a rule..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            className="image2"
            title="A Day in the life on an Engineering Manager"
            subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            className="image3"
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
