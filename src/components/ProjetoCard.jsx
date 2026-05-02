import { useState } from "react";

export function ProjetoCard({ projeto, feature = false }) {
    const [hovered, setHovered] = useState(false);

    return (
        <article 
            className={`project-card
                ${feature ? "project-card--featured" : ""}
                ${hovered ? "project-card--hovered" : ""}    
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {projeto.destaque && (
                <span className="project-card__badge">✦ destaque</span>
            )}

            {/* Tag de categoria */}
            <span 
                // Remove o hífen para usar como classe CSS: "Full-Stack" -> "fullstack"
                className={`project-card__category category--${projeto.categoria.toLowerCase().replace("-", "")}`}
            >
                {projeto.categoria}    
            </span>  

            {/* Ícone emoji do projeto */}
            <div className="project-card__icon">{projeto.emoji}</div>  

            {/* Título e descrição */}
            <h3 className="project-card__title">{projeto.titulo}</h3>
            <p className="project-card__desc">{projeto.descricao}</p>

            {/* Tags de tecnologias */}
            <div className="project-card__techs">
                {projeto.tecnologias.map((tech) => (
                    <span key={tech} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links para GitHub */}
            <div className="project-card__links">
                {projeto.github && (
                    <a 
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--github"
                    >
                       GitHub → 
                    </a>    
                )}
            </div>
        </article>    
    );
}