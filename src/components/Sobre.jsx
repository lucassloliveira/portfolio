import { DADOS } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";
import { Divider } from "./ui/Divider";

export function Sobre() {
    const infoItems = [
        { label: "Localização", valor: DADOS.localizacao },
        { label: "Formação", valor: DADOS.formacao },
        { label: "Foco", valor: DADOS.foco },
        { label: "Disponível para", valor: DADOS.disponivel },
    ];

    return (
        <section id="sobre" className="section section--alt">
            <div className="container">

                <SectionLabel>Sobre</SectionLabel>
                <h2 className="section__title">Quem sou eu</h2>
                <Divider />

                <div className="about__grid">

                    {/* Coluna de texto */}
                    <div className="abaout__text">
                        <p>
                            Sou estudante de{" "}
                        <strong>Engenharia de Software</strong> com foco em desenvolvimento full-stack usando Java e React. Apaixonado por construir soluções que resolvem problemas reais.
                        </p>
                        <p>
                            Atulmente aprofundando meus conhecimentos em{" "}
                            <span className="text-accent">Next.js</span>
                            <span className="text-accent">Redux</span> e boas práticas de desenvolvimento de software.
                        </p>

                        {/* Informações rápidas */}
                        <div className="abaout__meta">
                            {infoItems.map((item) => (
                                    <div key={item.label} className="about__meta-row">
                                        <span className="abot__meta-key">{item.label}:</span>
                                        <span className="about__meta-val">{item.valor}</span>
                                    </div>    
                            ))}
                        </div>
                    </div>

                    {/* Card de avatar */}
                    <div className="about__avatar-wrapper">
                        <div className="about__avatar-card">
                            {/* Ponto pulsante */}
                            <div className="about__avatar-dot" />
                            <div className="about__avatar-emoji">👨‍💻</div>
                            <div className="about__avatar-name">{DADOS.nome}</div>
                            <div className="about__avatar-role">Full-Stack Dev</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
