import React from 'react'

export const NavBar = () => {
    return (
        <nav class="navbar">
            <div class="brand">
                <h2>J<span>C</span></h2>
            </div>
            <ul class="menu">
                <li><a href="/" class="active">Inicio</a></li>
                <li><a href="#about">Quien Soy</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    )
}
