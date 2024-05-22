import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../css/sections/Skills.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";
import Image1 from "../img/html.webp";
import Image2 from "../img/css.webp";
import Image3 from "../img/javaScript.png";
import Image15 from "../img/typescript.webp";
import Image4 from "../img/react.webp";
import Image19 from "../img/nextjs.webp";
import Image20 from "../img/astro.webp";
import Image6 from "../img/c.webp";
import Image18 from "../img/.net.webp";
import Image7 from "../img/git.webp";
import Image8 from "../img/github.png";
import Image9 from "../img/blazor.webp";
import Image10 from "../img/tailwind.webp";
import Image5 from "../img/nodejs.png";
import Image16 from "../img/axios.webp";
import Image17 from "../img/express.png";
import Image14 from "../img/mongodb.webp";
import Image13 from "../img/sqlserver.webp";
import Image21 from "../img/MySQL.png";
import Image22 from "../img/figma.webp";
import Image23 from "../img/jira.webp";

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
          <Title title="Skills" lineCenter={true} colorFondo="white" />
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
            image={Image15}
            variants={cardAnimation}
            animate={controls}
            nombre="TypeScript"
          />
          <Testimonial
            image={Image4}
            variants={cardAnimation}
            animate={controls}
            nombre="React"
          />
          <Testimonial
            image={Image19}
            variants={cardAnimation}
            animate={controls}
            nombre="Next.js"
          />
          <Testimonial
            image={Image20}
            variants={cardAnimation}
            animate={controls}
            nombre="Astro"
          />
          <Testimonial
            image={Image6}
            variants={cardAnimation}
            animate={controls}
            nombre="C#"
          />
          <Testimonial
            image={Image18}
            variants={cardAnimation}
            animate={controls}
            nombre=".Net"
          />
          <Testimonial
            image={Image9}
            variants={cardAnimation}
            animate={controls}
            nombre="Blazor"
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
            image={Image10}
            variants={cardAnimation}
            animate={controls}
            nombre="Tailwind"
          />
          <Testimonial
            image={Image5}
            variants={cardAnimation}
            animate={controls}
            nombre="Node.js"
          />
          <Testimonial
            image={Image16}
            variants={cardAnimation}
            animate={controls}
            nombre="Axios"
          />
          <Testimonial
            image={Image17}
            variants={cardAnimation}
            animate={controls}
            nombre="ExpressJS"
          />
          <Testimonial
            image={Image22}
            variants={cardAnimation}
            animate={controls}
            nombre="Figma"
          />
          <Testimonial
            image={Image23}
            variants={cardAnimation}
            animate={controls}
            nombre="Jira"
          />
          <Testimonial
            image={Image14}
            variants={cardAnimation}
            animate={controls}
            nombre="MongoDB"
          />
          <Testimonial
            image={Image13}
            variants={cardAnimation}
            animate={controls}
            nombre="Sql Server"
          />
          <Testimonial
            image={Image21}
            variants={cardAnimation}
            animate={controls}
            nombre="MySql"
          />
        </div>
      </div>
    </div>
  );
}
