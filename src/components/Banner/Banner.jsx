import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
    return (
        <section className="hero-section">

            <div className="hero-content">

                {/* 1. Estado 
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Disponible para proyectos y oportunidades IT
                </div>
                    */}
                {/* 2. Foto */}
                <div className="profile-photo-container">
                    <img
                        src={miFoto}
                        alt="Foto de Angelo Távara"
                        className="profile-photo"
                    />
                </div>

                {/* 3. Nombre */}
                <h1 className="hero-title">
                    Angelo <br />
                    <span className="text-cyan">Távara Rabelo</span>
                </h1>

                {/* 4. Rol */}
                <h2 className="hero-subtitle">
                    Desarrollador Web | Estudiante Senati
                </h2>

                {/* 5. Descripción */}
                <p className="hero-description">
                    Desarrollo aplicaciones web modernas, dashboards interactivos y
                    soluciones inteligentes orientadas a automatizar procesos,
                    optimizar operaciones y transformar datos en información útil
                    para la toma de decisiones.
                </p>

                {/* 6. Botones */}
                <div className="hero-buttons">

                    <a href="#proyectos" className="btn btn-primary">
                        Ver Proyectos
                    </a>

                    <a href="#contacto" className="btn btn-secondary">
                        Contáctame
                    </a>

                </div>

            </div>
            <br /><br />
            {/* 7. Flecha */}
            <div className="scroll-indicator">
                ↓
            </div>

        </section>
    );
};

export default Banner;