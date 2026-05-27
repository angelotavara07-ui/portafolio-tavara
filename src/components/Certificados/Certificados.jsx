import './Certificados.css';
import ciscoLogo from '../../assets/ciscologo.png';
const certificadosData = [
    {
        id: 1,
        titulo: "Introducción a la Ciencia de Datos",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado.pdf"
    },
    {
        id: 2,
        titulo: "Introducción al Internet de las Cosas y Transformación Digital",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado2.pdf"
    },
    {
        id: 3,
        titulo: "Conceptos básicos de redes",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado3.pdf"
    },
    {
        id: 4,
        titulo: "Conceptos Básicos de Hardware de Computadora",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado4.pdf"
    },
    {
        id: 5,
        titulo: "Introducción a la ciberseguridad",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado5.pdf"
    },
    {
        id: 6,
        titulo: "Crear contenido digital, comunicar y colaborar en línea.",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado6.pdf"
    },
    {
        id: 7,
        titulo: "Conciencia Digital",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado7.pdf"
    },
    {
        id: 8,
        titulo: "Uso de Computadoras y Dispositivos Móviles",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado8.pdf"
    },
    {
        id: 9,
        titulo: "Descubriendo el Emprendimiento",
        institucion: "Cisco Networking Academy",
        imagen: ciscoLogo,
        pdf: "/certificados/Certificado9.pdf"
    }
];

const Certificados = () => {

    return (

        <section id="certificados" className="certificados-section">

            <div className="certificados-container">

                <h2 className="section-title text-center">
                    Certificados
                </h2>

                <div className="certificados-grid">

                    {certificadosData.map((certificado) => (

                        <article
                            key={certificado.id}
                            className="certificado-card"
                        >

                            {/* Imagen */}
                            <div className="certificado-imagen">

                                <img
                                    src={certificado.imagen}
                                    alt={certificado.titulo}
                                />

                            </div>

                            {/* Contenido */}
                            <div className="certificado-contenido">

                                <h3 className="certificado-titulo">
                                    {certificado.titulo}
                                </h3>

                                <p className="certificado-inst">
                                    {certificado.institucion}
                                </p>

                                {/* Botón */}
                                <div className="certificado-links">

                                    <a
                                        href={certificado.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-certificado"
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

                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>

                                            <polyline points="14 2 14 8 20 8"></polyline>

                                            <line x1="16" y1="13" x2="8" y2="13"></line>

                                            <line x1="16" y1="17" x2="8" y2="17"></line>

                                            <polyline points="10 9 9 9 8 9"></polyline>

                                        </svg>

                                        Ver Certificado

                                    </a>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Certificados;