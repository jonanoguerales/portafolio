import React from "react";
import { motion } from "framer-motion";
import "../css/components/Testimonial.scss";

function Testimonial({ image, nombre, variants, animate }) {
  return (
    <motion.div
      className="testimonial-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <p>{nombre}</p>
    </motion.div>
  );
}

export default Testimonial;
