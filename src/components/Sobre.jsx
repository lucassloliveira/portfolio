import { DADOS } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";
import { Divider } from "./ui/Divider";

function Avatar() {
    const iniciais = DADOS.nome
        .split(" ")
        .slice(0, 2)
        .map((p) => p[0].toUpperCase())
        .join("");

    return (
        <div className="avatar-card">

            <div className="avatar-card__titlebar">
                <span className="avatar-card__dot avatar-card__dot--red" />
                <span className="avatar-card__dot avatar-card__dot--yellow" />
                <span className="avatar-card__dot avatar-card__dot--green" />
                <span className="avatar-card__filename">perfil.jsx</span>
            </div>

            <div className="avatar-card__img">
                {/* Foto */}
                {DADOS.foto ? (
                    <img
                        src={DADOS.foto}
                        alt={`Foto de ${DADOS.nome}`}
                        className="avatar-card__photo"
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex"
                        }}
                    />    
                ) : null}

                    {/* Fallback: inciais quando não há foto */}
                    <span
                        className="avatar-card__initials"
                        style={{ display: DADOS.foto ? "none" : "flex" }}
                    >
                        {iniciais}    
                    </span>
            </div>    

            <div className="avatar-card__name">
                <span className="avatar-card__bracked">&lt;</span>
                {DADOS.nome.split(" ")[0].toLocaleLowerCase()}
                <span className="avatar-card__bracked">&gt; </span> 
            </div>  

            <div className="avatar-card__role">
                <span className="avatar-card__prompt">&gt; </span>
                {DADOS.foco}
            </div>   

            <div className="avatar-card__socials">
                <a
                    href={DADOS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avatar-card__cmd"
                >
                    <span className="avatar-card__prompt">$ </span>github
                </a>
                <a            
                    href={DADOS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avatar-card__cmd"
                >
                    <span className="avatar-card__prompt">$ </span>linkedin
                </a>
            </div>     
        </div>
    );
}

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
                    <div className="about__text">
                        <p>
                            Sou estudante de{" "}
                        <strong>Engenharia de Software</strong> com foco em desenvolvimento full-stack usando Java e React. Apaixonado por construir soluções que resolvem problemas reais.
                        </p>
                        <p>
                            Atualmente aprofundando meus conhecimentos em {" "}
                            <span className="text-accent">Next.js</span>, {" "}
                            <span className="text-accent">Redux</span> e boas práticas de desenvolvimento de software.
                        </p>

                        {/* Informações rápidas */}
                        <div className="about__meta">
                            {infoItems.map((item) => (
                                    <div key={item.label} className="about__meta-row">
                                        <span className="about__meta-key">{item.label}:</span>
                                        <span className="about__meta-val">{item.valor}</span>
                                    </div>    
                            ))}
                        </div>
                    </div>

                    {/* Card de avatar */}
                    <div className="about__avatar-wrapper">
                        <Avatar />
                    </div>

                </div>
            </div>
        </section>
    );
}
