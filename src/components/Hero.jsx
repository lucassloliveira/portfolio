import { DADOS, FRASES_TYPEWRITER } from "../data/dados";
import { useTypewriter } from "../hooks/useTypewriter";

export function Hero() {
    // Usa o hook de typewriter
    const textoAnimado = useTypewriter(FRASES_TYPEWRITER);

    return (
        <section id="topo" className="hero">
            {/* Elemnetos decorativos de fundo */}
            <div className="hero__orb hero__orb--1"/>
            <div className="hero__orb hero__orb--2"/>

            {/* Tag de terminal */}
            <div className="hero__tag">hello --world</div>

            {/* Nome principal */}
            <h1 className="hero__name">
                Olá, sou <em>{DADOS.nome}</em>    
            </h1> 

            {/* Texto animado com cursor piscando */}
            <div className="hero__role">
                <span className="hero__role-prefix">&gt; </span>
                <span>{textoAnimado}</span>
                {/* aria-hidden: esconde o cursor do elitor de tela */}
                <span className="hero__cursor" aria-hidden="true" />
            </div>

            {/* Descrição breve */}
            <p className="hero__desc">{DADOS.sobre1}</p>

            {/* Botões de ação */}
            <div className="hero__buttons">
                <a href="#projetos" className="btn btn--primary">
                    ver projetos
                </a>
                <a
                    href={DADOS.github}
                    target="_blank"
                    rel="noopener noreferrer" //evita acesso ao window.opener
                    className="btn btn--ghost"
                >
                    github
                </a>    
            </div>
        </section>
    );
}

export default Hero;