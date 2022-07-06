import React from 'react';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Home } from '../components/home/Home';
import { NavBar } from '../components/navbar/NavBar';
import { Portafolio } from '../components/portafolio/Portafolio';

function App() {
    return (
        <>
        <NavBar/>
        <Home/>
        <About/>
        <Portafolio/>
        <Contact/>
        <Footer/>
        </>
    );
}

export default App;