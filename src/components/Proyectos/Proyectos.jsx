import preview from '../../assets/preview.png';
import preview2 from '../../assets/preview2.png';
import preview3 from '../../assets/preview3.png';
import preview4 from '../../assets/preview4.png';
import preview5 from '../../assets/preview5.png';
import './Proyectos.css';

const Proyectos = () => {
    // Arreglo de proyectos (Simulando una base de datos o API)
    const proyectosData = [
        {
            id: 1,
            imagen: preview,
            titulo: "Sistema de Citas Médicas",
            descripcion: "Dashboard y sistema web para gestión de citas médicas desarrollado con Laravel.",
            tecnologias: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
            linkDemo: "https://knightxhornet.com/",
            linkCodigo: "https://github.com/alonsoSaavedra-03/app-gestion-citas"
        },
        {
            id: 2,
            imagen: preview2,
            titulo: "Dashboard de Clínica",
            descripcion: "Dashboard administrativo para gestión de pacientes y servicios médicos.",
            tecnologias: ["HTML", "CSS", "JavaScript", "Chart.js"],
            linkDemo: "https://saludvida.xo.je/",
            linkCodigo: "https://github.com/alonsoSaavedra-03/Clinica_Proyecto"
        },
        {
            id: 3,
            imagen: preview3,
            titulo: "Sistema de Matrículas",
            descripcion: "Sistema web de matrículas desarrollado con JavaScript puro.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            linkDemo: "https://lamatriculatrabajo.xo.je",
            linkCodigo: "https://github.com/angelotavara07-ui/Proyecto-JS1"
        },
        {
            id: 4,
            imagen: preview4,
            titulo: "Sistema de Envío de Correos con PHPMailer",
            descripcion: "Aplicación web desarrollada con PHP y PHPMailer para el envío automatizado de correos electrónicos mediante formularios personalizados.",
            tecnologias: ["PHP", "PHPMailer", "HTML", "CSS", "JavaScript"],
            linkDemo: "https://tavara-proyecto-php.rf.gd",
        },
        {
            id: 5,
            imagen: preview5,
            titulo: "Tienda en Línea — VendeFácil",
            descripcion: "Tienda web desarrollada con React y Vite. Incluye catálogo de 30 productos en 3 categorías, sistema de pedidos por WhatsApp, formulario de contacto con EmailJS y diseño responsive para desktop y móvil.",
            tecnologias: ["React", "Vite", "CSS3", "EmailJS", "SweetAlert2", "React Router DOM"],
            linkDemo: "https://vendefacil-blush.vercel.app/",
            linkCodigo: "https://github.com/angelotavara07-ui/vendefacil"
        },
    ];
    return (
        <section id="proyectos" className="proyectos-section">
            <div className="proyectos-container">
                <h2 className="section-title text-center">Proyectos
                    Destacados</h2>
                <div className="proyectos-grid">
                    {proyectosData.map((proyecto) => (
                        <article key={proyecto.id} className="proyecto-card">
                            <div className="proyecto-imagen">
                                <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
                            </div>
                            <div className="proyecto-contenido">
                                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                                <p className="proyecto-desc">{proyecto.descripcion}</p>
                                <div className="proyecto-tags">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="proyecto-links">
                                    <a href={proyecto.linkDemo} target="_blank"
                                        rel="noopener noreferrer" className="btn-proyecto btn-demo">

                                        <svg width="18" height="18" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">

                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>

                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Demo en Vivo
                                    </a>
                                    {proyecto.linkCodigo && (

                                        <a
                                            href={proyecto.linkCodigo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-proyecto btn-codigo"
                                        >

                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >

                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>

                                            </svg>

                                            Ver Código

                                        </a>

                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Proyectos;