import React, { useRef } from 'react';
import Title from "../components/Title";
import { useScroll } from '../components/useScroll';
import { motion } from "framer-motion";
import { textAnimation } from "../utils/Animations";
import Button from '../components/Button';
import emailjs from '@emailjs/browser';
import "../css/sections/Contact.scss"

export const Contact = () => {
    const [element, controls] = useScroll();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_k3mn0fd", "template_os86fyp", form.current, "CuoAJEX6sR5-opZsN")
            .then((result) => {
                window.location.reload(); //Para refrescar la pagina
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-section" id="contacto" ref={element}>
            <motion.div
                className="title-container"
                variants={textAnimation}
                animate={controls}
                transition={{ duration: 1 }}
            >
                <Title title="Contacto" lineCenter={false} colorFondo="black" />
            </motion.div>
            <motion.div 
                className="container-contact" 
                variants={textAnimation}
                animate={controls}
                transition={{ duration: 1 }}
                >
                <div className="contact-form">
                    <h4>Envíame un mensaje...</h4>
                    <form className="form-group" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Nombre" className="input" />
                        <input type="email" placeholder="Email" className="input" />
                        <textarea name="message" placeholder="Escribe tu mensaje aquí..."></textarea>
                        <Button content="Enviar" type="submit" />
                    </form>
                </div>
            </motion.div>
        </div>
    )
}
