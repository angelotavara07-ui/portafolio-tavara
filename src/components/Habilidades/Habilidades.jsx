import './Habilidades.css';

const Habilidades = () => {

// Tecnologías y habilidades
const skillsData = [

{
id: 1,
titulo: "React",
descripcion: "Desarrollo de interfaces modernas basadas en componentes reutilizables.",
nivel: "Aprendizaje Activo",
estado: "aprendiendo"
},

{
id: 2,
titulo: "Laravel",
descripcion: "Desarrollo backend con rutas, controladores, migraciones y APIs.",
nivel: "Intermedio",
estado: "aprendiendo"
},

{
id: 3,
titulo: "JavaScript",
descripcion: "Lógica de programación, DOM, eventos, fetch API y ES6.",
nivel: "Intermedio",
estado: "aprendiendo"
},

{
id: 4,
titulo: "HTML5 & CSS3",
descripcion: "Diseño de interfaces responsivas utilizando Flexbox y Grid.",
nivel: "Intermedio",
estado: "aprendiendo"
},

{
id: 5,
titulo: "MySQL & PostgreSQL",
descripcion: "Consultas SQL, relaciones, modelado y gestión de bases de datos.",
nivel: "Intermedio",
estado: "aprendiendo"
},

{
id: 6,
titulo: "Power BI",
descripcion: "Creación de dashboards interactivos y visualización de datos.",
nivel: "Aprendizaje Activo",
estado: "aprendiendo"
},

{
id: 7,
titulo: "Python",
descripcion: "Automatización básica, análisis de datos y lógica de programación.",
nivel: "Básico - Intermedio",
estado: "aprendiendo"
},

{
id: 8,
titulo: "Git & GitHub",
descripcion: "Control de versiones, ramas, commits y repositorios remotos.",
nivel: "Intermedio",
estado: "aprendiendo"
},

{
id: 9,
titulo: "Responsive Design",
descripcion: "Adaptación de interfaces para móviles, tablets y escritorio.",
nivel: "Intermedio",
estado: "aprendiendo"
},

{
id: 10,
titulo: "APIs REST",
descripcion: "Consumo e integración de APIs usando fetch y JSON.",
nivel: "Aprendizaje Activo",
estado: "aprendiendo"
},

{
id: 11,
titulo: "Node.js",
descripcion: "Conocimientos básicos para desarrollo backend y servidores.",
nivel: "Básico",
estado: "aprendiendo"
},

{
id: 12,
titulo: "UI/UX Básico",
descripcion: "Diseño limpio, moderno y enfocado en experiencia de usuario.",
nivel: "Aprendizaje Activo",
estado: "aprendiendo"
}

];

return (

<section id="tech-stack" className="habilidades-section">

<div className="habilidades-container">

<h2 className="section-title">
Habilidades
</h2>

<div className="habilidades-grid">

{skillsData.map((skill) => (

<div key={skill.id} className="skill-card">

{/* Header */}
<div className="skill-header">

<div className="skill-icon">

<svg
width="32"
height="32"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
className="text-cyan"
>

<rect
x="3"
y="3"
width="18"
height="18"
rx="2"
ry="2"
></rect>

<line x1="3" y1="9" x2="21" y2="9"></line>
<line x1="9" y1="21" x2="9" y2="9"></line>

</svg>

</div>

<span
className={`skill-badge ${
skill.estado === 'aprendiendo'
? 'badge-yellow'
: 'badge-green'
}`}
>

{skill.estado === 'aprendiendo'
? ''
: 'DOMINADO'}

</span>

</div>

{/* Body */}
<div className="skill-body">

<h3 className="skill-title">
{skill.titulo}
</h3>

<p className="skill-desc">
{skill.descripcion}
</p>

<span className="skill-level">
{skill.nivel}
</span>

</div>

</div>

))}

</div>

</div>

</section>

);

};

export default Habilidades;