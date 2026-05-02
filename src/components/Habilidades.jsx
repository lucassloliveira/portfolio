import { HABILIDADES } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";
import { Divider } from "./ui/Divider";

export function Habilidades() {
    return (
        <section id="habilidades" className="section section--alt">
            <div className="container">

                <SectionLabel>habilidades</SectionLabel>
                <h2 className="section__title">Tecnologias & Ferramentas</h2>
                <Divider />

                <div className="skills-grid">
                    {/* Para cadacategoria */}
                    {HABILIDADES.map((grupo) => (
                        <div key={grupo.categoria} className="akill-card">

                            {/* Nome da categoria */}
                            <div className="skill-card__category">{grupo.categoria}</div>

                            {/* Lista de skills como tags */}
                            <div className="skill-card__tags">
                                {grupo.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}