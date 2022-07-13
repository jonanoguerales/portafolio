import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../css/sections/Skills.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";
import Image1 from "../img/HTML5.png"
import Image2 from "../img/CSS3.png"
import Image3 from "../img/javaScript.png"
import Image4 from "../img/React.png"
import Image5 from "../img/nodejs.png"
import Image6 from "../img/SASS.png"
import Image7 from "../img/git.png"
import Image8 from "../img/github.png"
import Image9 from "../img/Bootstrap-Logo.png"
import Image10 from "../img/framer motion.png"
import Image11 from "../img/docker.png"
import Image12 from "../img/MySQL.png"
import Image13 from "../img/MongoDB_Logo.svg.png"
import Image14 from "../img/TypeScript.png"
import Image15 from "../img/axios.png"
import Image16 from "../img/express.png"
import Image17 from "../img/styled-components.png"

export default function Skills() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="skills" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Skills" lineCenter={true} colorFondo="white"/>
          <p>See what our clients are saying about us.</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            image={Image1}
            variants={cardAnimation}
            animate={controls}
            nombre="HTML5"
          />
          <Testimonial
            image={Image2}
            variants={cardAnimation}
            animate={controls}
            nombre="CSS3"
          />
          <Testimonial
            image={Image3}
            variants={cardAnimation}
            animate={controls}
            nombre="JavaScript"
          />
          <Testimonial
            image={Image4}
            variants={cardAnimation}
            animate={controls}
            nombre="React"
          />
          <Testimonial
            image={Image5}
            variants={cardAnimation}
            animate={controls}
            nombre="Node.js"
          />
          <Testimonial
            image={Image6}
            variants={cardAnimation}
            animate={controls}
            nombre="Sass"
          />
          <Testimonial
            image={Image7}
            variants={cardAnimation}
            animate={controls}
            nombre="Git"
          />
          <Testimonial
            image={Image8}
            variants={cardAnimation}
            animate={controls}
            nombre="GitHub"
          />
          <Testimonial
            image={Image9}
            variants={cardAnimation}
            animate={controls}
            nombre="Bootstrap"
          />
          <Testimonial
            image={Image10}
            variants={cardAnimation}
            animate={controls}
            nombre="Framer Motion "
          />
          <Testimonial
            image={Image11}
            variants={cardAnimation}
            animate={controls}
            nombre="Docker"
          />
          <Testimonial
            image={Image12}
            variants={cardAnimation}
            animate={controls}
            nombre="MySQL"
          />
          <Testimonial
            image={Image13}
            variants={cardAnimation}
            animate={controls}
            nombre="MongoDB"
          />
          <Testimonial
            image={Image14}
            variants={cardAnimation}
            animate={controls}
            nombre="TypeScript"
          />
          <Testimonial
            image={Image15}
            variants={cardAnimation}
            animate={controls}
            nombre="Axios"
          />
          <Testimonial
            image={Image16}
            variants={cardAnimation}
            animate={controls}
            nombre="ExpressJS"
          />
          <Testimonial
            image={Image17}
            variants={cardAnimation}
            animate={controls}
            nombre="Styled Components"
          />
        </div>
      </div>
    </div>
  );
}
