import './Perfil.css';

const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">

            <div className="sobre-mi-container">

                <h2 className="section-title">
                    Sobre mí
                </h2>

                <div className="sobre-mi-grid">

                    {/* =====================================
TARJETA 1: PERFIL
====================================== */}
                    <div className="card">

                        <div className="card-header">

                            <div className="icon-box">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>

                            <h3>Perfil profesional</h3>

                        </div>

                        <p className="card-text">
                            Soy estudiante actualmente por cursar el 4to semestre de Desarrollo de Software en
                            SENATI, apasionado por el desarrollo web, la automatización
                            de procesos y el análisis de datos.
                            <br /><br />

                            Actualmente me encuentro fortaleciendo mis conocimientos en
                            React, Laravel, JavaScript, SQL y Power BI, desarrollando
                            proyectos personales y aplicaciones web modernas orientadas
                            a resolver necesidades reales.
                            <br /><br />

                            Me interesa crear soluciones funcionales, intuitivas y
                            escalables, combinando diseño, lógica de programación y
                            gestión de datos para seguir creciendo profesionalmente
                            en el área tecnológica.
                        </p>

                    </div>

                    {/* =====================================
TARJETA 2: EDUCACIÓN
====================================== */}
                    <div className="card">

                        <div className="card-header">

                            <div className="icon-box">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 10v6"></path>
                                    <path d="M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>

                            <h3>Educación</h3>

                        </div>

                        <div className="timeline">

                            {/* Educación 1 */}
                            <div className="timeline-item">

                                <div className="timeline-header">
                                    <h4>Desarrollo de Software</h4>

                                    <span className="badge badge-solid">
                                        En curso
                                    </span>
                                </div>

                                <span className="timeline-date">
                                    SENATI - 4to Semestre
                                </span>

                            </div>

                            {/* Educación 2 */}
                            <div className="timeline-item">

                                <div className="timeline-header">
                                    <h4>Desarrollo Web Frontend</h4>

                                    <span className="badge badge-outline">
                                        Aprendizaje activo
                                    </span>
                                </div>

                                <span className="timeline-date">
                                    React • HTML • CSS • JavaScript
                                </span>

                            </div>

                            {/* Educación 3 */}
                            <div className="timeline-item">

                                <div className="timeline-header">
                                    <h4>Backend y Bases de Datos</h4>

                                    <span className="badge badge-outline">
                                        Aprendizaje activo
                                    </span>
                                </div>

                                <span className="timeline-date">
                                    Laravel • MySQL • PostgreSQL
                                </span>

                            </div>

                            {/* Educación 4 */}
                            <div className="timeline-item">

                                <div className="timeline-header">
                                    <h4>Business Intelligence y Data Analytics</h4>

                                    <span className="badge badge-outline">
                                        Aprendizaje activo
                                    </span>
                                </div>

                                <span className="timeline-date">
                                    Power BI • SQL • Python
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Perfil;