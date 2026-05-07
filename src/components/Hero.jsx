import { DADOS, FRASES_TYPEWRITER } from "../data/dados";
import { useTypewriter } from "../hooks/useTypewriter";

// Ilustração SVG
function TechIllustration() {
    return (
        <div className="hero__decoration" aria-hidden="true">
            <svg
                viewBox="0 0 320 260"
                xmlns="http://www.w3.org/2000/svg"
                className="hero__illustration"
            >
                {/* Janela do editor */}
                <rect x="10" y="10" width="300" height="240" rx="12" fill="#141023" stroke="rgba(179,102,255,0.3)" strokeWidth="1.5" />

                {/* Barra de título */}
                <rect x="10" y="10" width="300" height="36" rx="12" fill="#0f0a1a" />
                <rect x="10" y="34" width="300" height="12" fill="#0f0a1a" />

                {/* Botões da janela */}
                <circle cx="34" cy="28" r="5" fill="rgba(255,100,100,0.5)" />
                <circle cx="52" cy="28" r="5" fill="rgba(255,200,0,0.5)" />
                <circle cx="70" cy="28" r="5" fill="rgba(0,200,100,0.5)" />

                {/* Nome do arquivo */}
                <text x="155" y="33" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.3)">Portfolio.jsx</text>

                {/* Números de linha */}
                {[1,2,3,4,5,6,7,8,9,10].map((n, i) => (
                    <text key={n} x="28" y={70 + i * 18} fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(179,102,255,0.25)" textAnchor="middle">{n}</text>
                ))}

                {/* Linhas de código — simuladas com retângulos */}
                {/* Linha 1: import */}
                <text x="44" y="70" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(179,102,255,0.7)">import</text>
                <rect x="84" y="62" width="60" height="8" rx="2" fill="rgba(123,104,255,0.25)" />
                <text x="148" y="70" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.3)">from</text>
                <rect x="170" y="62" width="80" height="8" rx="2" fill="rgba(179,102,255,0.15)" />

                {/* Linha 2: vazia */}

                {/* Linha 3: export */}
                <text x="44" y="106" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(179,102,255,0.7)">export function</text>
                <text x="144" y="106" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(123,200,255,0.8)">Portfolio</text>
                <text x="195" y="106" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.4)">() {"{"}</text>

                {/* Linha 4: return */}
                <text x="52" y="124" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(179,102,255,0.7)">  return</text>
                <text x="97" y="124" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.3)"> (</text>

                {/* Linha 5: JSX */}
                <text x="60" y="142" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,150,80,0.7)">    &lt;div</text>
                <text x="96" y="142" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(123,200,255,0.6)"> className</text>
                <text x="154" y="142" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.3)">=</text>
                <rect x="160" y="134" width="60" height="8" rx="2" fill="rgba(179,102,255,0.2)" />
   
                { /* Linha 6 */}
                <rect x="68" y="152" width="120" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
        
                {/* Linha 7 */}
                <rect x="68" y="170" width="90" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
        
                {/* Linha 8: fechamento */}
                <text x="60" y="206" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,150,80,0.7)">    &lt;/div&gt;</text>
        
                {/* Linha 9 */}
                <text x="52" y="224" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.3)">  )</text>
        
                {/* Linha 10: fechamento */}
                <text x="44" y="242" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.3)">{"}"}</text>
   
                {/* Cursor piscante */}
                <rect x="44" y="188" width="2" height="12" rx="1" fill="rgba(179,102,255,0.9)">
                <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
                </rect>
        
                {/* Glow no fundo */}
                <ellipse cx="160" cy="240" rx="120" ry="20"
                fill="rgba(179,102,255,0.06)" />
            </svg>    
        </div>
    );
}

export function Hero() {
    // Usa o hook de typewriter
    const textoAnimado = useTypewriter(FRASES_TYPEWRITER);

    return (
        <section id="topo" className="hero">
            {/* Elemnetos decorativos de fundo */}
            <div className="hero__orb hero__orb--1"/>
            <div className="hero__orb hero__orb--2"/>

            {/* Ilustração SVG */}
            <TechIllustration />

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
