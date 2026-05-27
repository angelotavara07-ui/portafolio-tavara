import './Servicios.css';

const serviciosData = [
    {
        id: 1,
        titulo: "Desarrollo Web",
        descripcion:
            "Desarrollo de páginas y aplicaciones web modernas utilizando React, Laravel, JavaScript y MySQL. Interfaces responsivas y enfocadas en una buena experiencia de usuario.",
        icono: "💻"
    },
    {
        id: 2,
        titulo: "Dashboards y Análisis de Datos",
        descripcion:
            "Creación de dashboards interactivos con Power BI, Excel y SQL para visualizar información, generar reportes y apoyar la toma de decisiones.",
        icono: "📊"
    },
    {
        id: 3,
        titulo: "Sistemas de Gestión",
        descripcion:
            "Desarrollo de sistemas para gestión de matrículas, citas médicas, inventario y control administrativo adaptados a diferentes necesidades.",
        icono: "🗂️"
    },
    {
        id: 4,
        titulo: "Bases de Datos",
        descripcion:
            "Diseño y administración de bases de datos relacionales utilizando MySQL y PostgreSQL, incluyendo consultas SQL y modelado de datos.",
        icono: "🛢️"
    }
];

const Servicios = () => {
    return (
        <section id="servicios" className="servicios-section">

            <h2 className="section-title">
                Servicios
            </h2>

            <div className="servicios-grid">

                {serviciosData.map((servicio) => (

                    <div
                        key={servicio.id}
                        className="servicio-card"
                    >

                        <div className="servicio-icono">
                            {servicio.icono}
                        </div>

                        <h3 className="servicio-titulo">
                            {servicio.titulo}
                        </h3>

                        <p className="servicio-desc">
                            {servicio.descripcion}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Servicios;