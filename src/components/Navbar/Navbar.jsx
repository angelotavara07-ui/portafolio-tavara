import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

return (

<nav className="navbar">

<div className="navbar-logo">
<span className="text-cyan">Angelo</span> Tavara
</div>

<div className={`navbar-links ${isOpen ? "open" : ""}`}>

<a href="#banner" onClick={() => setIsOpen(false)}>
Inicio
</a>

<a href="#sobre-mi" onClick={() => setIsOpen(false)}>
Perfil
</a>

<a href="#tech-stack" onClick={() => setIsOpen(false)}>
Habilidades
</a>

<a href="#proyectos" onClick={() => setIsOpen(false)}>
Proyectos
</a>

<a href="#contacto" onClick={() => setIsOpen(false)}>
Contacto
</a>

<a href="#servicios" onClick={() => setIsOpen(false)}>
Servicios
</a>

<a href="#certificados" onClick={() => setIsOpen(false)}>
Certificados
</a>

</div>

<div
className="navbar-toggle"
onClick={() => setIsOpen(!isOpen)}
>

<span className="bar"></span>
<span className="bar"></span>
<span className="bar"></span>

</div>

</nav>

);

};

export default Navbar;