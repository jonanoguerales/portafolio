import React from "react";
import Blog from "../components/Blog";
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
            subTitle="Blog para usuarios, con un registro y un login, donde pueden compartir cualquier historia o publicación, cada blog está clasificado por categorias y cada blog puede ser modificado por su propietario.
            Cada usuario cuenta con su propia página de perfil y opciones donde puede editar su perfil. Cuenta con CRUD,Dasboard para usuarios con rol de admin y gestión de imagenes. El backend, api rest está realizado
            con node, express y axios. Y el fronted con React y distintas librerias."
            href1="https://github.com/jonanoguerales/BlogIn"
            href2="https://github.com/jonanoguerales/BlogIn"
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
      </div>
    </div>
  );
}

export default Portafolio;
