import { DADOS } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";

export function Contato() {
    return (
        <section id="contato" className="section section--dark">
            <div className="container">
                <div className="contact__center">

                    <SectionLabel>contato</SectionLabel>
                    <h2 className="section__title">Vamos conversar?</h2>
                    <p className="contact__desc">
                                    Estou sempre aberto a novas oportunidades, projetos e trocas de experiências. Manda uma mensagem!
                    </p>

                    {/* E-mail clicável */}
                    <a href={`mailto:${DADOS.email}`} className="contact__email">
                        {DADOS.email}
                    </a>

                    {/* Links de redes sociais */}
                    <div className="contact__socials">
                        <a 
                            href={DADOS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            GitHub    
                        </a>   

                        <a 
                            href={DADOS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            LinkedIn   
                        </a> 
                    </div>
                    
                </div>
            </div>
        </section>
    );
}