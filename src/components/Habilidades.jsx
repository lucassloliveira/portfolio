import { useState } from "react";
import { HABILIDADES } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";
import { Divider } from "./ui/Divider";

// Tag de uma skill 
function SkillTag({ skill }) {
    const [tooltip, setTooltip] = useState(false);

    // Determina qual classe CSS aplicar com base no estado da skill
    const getClasse = () => {
        if (skill.studying) return "skill-tag-rpg skill-tag-rpg--studying";
        if (skill.locked) return "skill-tag-rpg skill-tag-rpg--locked";
        return "skill-tag-rpg";
    };

    return (
        <div
            className={getClasse()}
            onMouseEnter={() => skill.locked && setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
        >
            {/* Estudando agora */}
            {skill.studying && (
                <span className="skill-tag-rpg__studying-dot" aria-hidden="true" />
            )}

            {/* Desbloqueada */}
            {!skill.studying && !skill.locked && (
                <span className="skill-tag-rpg__dot" />
            )}

            {/* Bloqueada */}
            {skill.locked && (
                <span className="skill-tag-rpg__dot skill-tag-rpg--locked" />
            )}

            {/* Nome da skill */}
            {skill.nome}

            {/* Label "estudando agora" só no estado de studying */}
            {skill.studying && (
                <span className="skill-tag-rpg__studying-label">estudando</span>
            )}

            {/* Cadeado no estado locked */}
            {skill.locked && (
                <span className="skill-tag-rpg__lock" aria-hidden="true">🔒</span>
            )}

            {/* Tooltip */}
            {skill.locked && tooltip && (
                <div className="skill-tag-rpg__tooltip" role="tooltip">
                    {skill.tip || "bloqueado - em breve"}
                </div>
            )}
        </div>    
    );
}

// Card de uma categoria
function CategoriaCard({ grupo }) {
    // Conta só as desbloqueadas (studying conta como desbloquada)
    const desbloqueadas = grupo.skills.filter((s) => !s.locked).length;
    const total = grupo.skills.length;
    const porcentagem = Math.round((desbloqueadas / total) * 100);

    return (
        <div className="skill-card-rpg">

            <div className="skill-card-rpg__header">
                <span className="skill-card-rpg__category">{grupo.categoria}</span>
                <span className="skill-card-rpg__count">{desbloqueadas}/{total}</span>
            </div>

            <div className="skill-card-rpg__tags">
                {grupo.skills.map((skill) => (
                    <SkillTag key={skill.nome} skill={skill} />
                ))}
            </div>

            {/* Barra de progresso */}
            <div className="skill-card-rpg__progress">
                <div 
                    className="skill-card-rpg__progress-fill"
                    style={{ width: `${porcentagem}%` }}
                />    
            </div>
            <div className="skill-card-rpg__xp">{porcentagem}% desbloqueado</div>
            
        </div>
    );
}

export function Habilidades() {
    return (
        <section id="habilidades" className="section section--alt">
            <div className="container">

                <SectionLabel>habilidades</SectionLabel>
                <h2 className="section__title">Tecnologias & Ferramentas</h2>
                <Divider />

                <div className="skills-legend">
                    <div className="skills-legend__item">
                        <span className="skills-legend__dot skills-legend__dot--on" />
                        desbloqueado
                    </div>
                    <div className="skills-legend__item">
                        {/* Ponto pulsante */}
                        <span className="skills-legend__dot skills-legend__dot--studying" />
                        estudando agora
                    </div>
                    <div className="skills-legend__item">
                        <span className="skills-legend__dot skills-legend__dot--off" />
                        bloqueado
                    </div>
                </div>

                <div className="skills-grid-rpg">
                    {HABILIDADES.map((grupo) => (
                        <CategoriaCard key={grupo.categoria} grupo={grupo} />
                    ))}
                </div>
                
            </div>
        </section>
    );
}