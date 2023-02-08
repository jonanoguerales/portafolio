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
        <motion.div 
          className="blogs"
          variants={textAnimation}
          animate={controls}
          >
          <Blog
            className="image1"
            title="Blog Sitio Web"
            subTitle="Blog para usuarios, con un registro y un login, donde pueden compartir cualquier historia o publicación, cada blog está clasificado por categorías y cada blog puede ser modificado por su propietario.
            Cada usuario cuenta con su propia página de perfil y opciones donde puede editar su perfil. Cuenta con CRUD y Dashboard para usuarios con rol de admin y gestión de imágenes. El backend, api rest está realizado
            con node, express, distintas librerías y base de datos mongoDB. Y el fronted con React, Axios para las llamadas a la api y distintas librerías."
            href1="https://github.com/jonanoguerales/BlogIn"
            href2="https://blog-in.vercel.app"
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            className="image2"
            title="Portafolio CV"
            subTitle="Portafolio para representar en él, tu CV, sobre tí, tus conocimientos, tus proyectos y un apartado de contacto.
            Está creado con react, node.js, sass y framer motion."
            href1="https://github.com/jonanoguerales/portafolio"
            href2="https://portafoliojonathannoguerales.vercel.app"
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            className="image3"
            title="Wishlist"
            subTitle="Pequeño proyecto de una lista de deseos con un CRUD, un login y un registro. 
            Está creado con PHP y MySQL."
            href1="https://github.com/jonanoguerales/Wishlist-PHP-y-MySQL"
            href2="https://github.com/jonanoguerales/Wishlist-PHP-y-MySQL"
            variants={cardAnimation}
            animate={controls}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Portafolio;
