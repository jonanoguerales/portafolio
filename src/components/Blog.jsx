import React from "react";
import Button from "./Button";
import { AiFillGithub } from "react-icons/ai";
import { RiPagesFill } from "react-icons/ri";
import { motion } from "framer-motion";
import "../css/components/Blog.scss";

function Blog({ className, href1, href2, title, subTitle, variants, animate }) {
  return (
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className={className}></div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        <a href={href1} target="_blank">
        <Button
          content="GitHub"
          color="inverse"
          icon={<AiFillGithub />}
        />
        </a>
        <a href={href2} target="_blank">
        <Button
          content="Página"
          color="inverse"
          icon={<RiPagesFill />}
        />
        </a>
      </div>
    </motion.div>
  );
}

export default Blog;
