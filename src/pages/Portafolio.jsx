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
          <Title title="Portafolio" lineCenter={false} colorFondo="black" />
          <p>Proyectos realizados</p>
        </motion.div>
        <motion.div
          className="blogs"
          variants={textAnimation}
          animate={controls}
        >
          <Blog
            className="image3"
            title="Movilizatee"
            subTitle="Aplicación web creada para un amigo, para el entrenamiento personal, creada con Astro y Tailwind. En la aplicación puedes navegar por las distintas páginas con distinto contenido, donde podrás obtener información, contratar un plan de entrenamiento o contactar con el entrenador."
            href1="https://github.com/jonanoguerales/MovilizateWeb"
            href2="https://movilizatee.com"
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            className="image1"
            title="Blog Sitio Web"
            subTitle="Aplicación web para un blog de recetas de cocina, en la que se podrá crear y compartir recetas, editarlas y comentarlas, hay otros apartados como contacto para contactar con los administradores del blog, apartados como perfil, ajustes y un dasHboard para usuarios con rol de administrador, donde ver estadísticas o datos, como también donde se puede editar, eliminar o crear usuarios y posts. El frontEnd está creada con React, Next.js, Tailwind, el backEnd con Node.js, Express.js, la base de datos con MongoDB y servidor en la nube para la multimedia con Cloudinary."
            href1="https://github.com/jonanoguerales/blogCook"
            href2="https://blog-cook.vercel.app"
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
        </motion.div>
      </div>
    </div>
  );
}

export default Portafolio;
