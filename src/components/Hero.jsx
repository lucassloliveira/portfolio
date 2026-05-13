import { useEffect, useMemo, useRef } from "react";
import { DADOS, FRASES_TYPEWRITER } from "../data/dados";
import { useTypewriter } from "../hooks/useTypewriter";

// Caracteres flutuantes
const CHARS = ['{', '}', '/>', '=>', '//', '()', '[]', '&&', '</>', 'fn', '0x', '!=', '::'];

function CodeParticles() {
    // Refs para manipular o DOM diretamente — zero re-renders
  const refsParticulas = useRef([]);
  const animRef        = useRef(null);

  // Dados estáveis: gerados uma vez, nunca recalculados
  const particulas = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id:        i,
      char:      CHARS[Math.floor(Math.random() * CHARS.length)],
      x:         5  + Math.random() * 90,           // posição horizontal fixa (%)
      y:         10 + Math.random() * 80,            // posição vertical base (%)
      amplitude: 8  + Math.random() * 14,            // altura do float (px)
      frequencia: 0.00025 + Math.random() * 0.00035, // velocidade (rad/ms) → ~18–40s por ciclo
      fase:      Math.random() * Math.PI * 2,        // ponto inicial na onda (0 a 2π)
      tamanho:   9  + Math.random() * 7,             // tamanho da fonte (px)
      opacidade: 0.12 + Math.random() * 0.10,        // opacidade sutil
    }))
  , []);

  useEffect(() => {
    // Loop de animação: roda a 60fps sem tocar no estado do React
    function animar(timestamp) {
      refsParticulas.current.forEach((el, i) => {
        if (!el) return;
        const p = particulas[i];
        // Onda senoidal pura: sem loop point, infinitamente suave
        const y = Math.sin(timestamp * p.frequencia + p.fase) * p.amplitude;
        el.style.transform = `translateY(${y}px)`;
      });
      animRef.current = requestAnimationFrame(animar);
    }

    animRef.current = requestAnimationFrame(animar);

    // Cleanup: cancela o loop quando o componente desmonta
    return () => cancelAnimationFrame(animRef.current);
  }, [particulas]);

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {particulas.map((p, i) => (
        <span
          key={p.id}
          ref={(el) => (refsParticulas.current[i] = el)}
          className="absolute font-mono"
          style={{
            left:      `${p.x}%`,
            top:       `${p.y}%`,
            fontSize:  `${p.tamanho}px`,
            opacity:   p.opacidade,
            color:     '#b366ff',
            willChange: 'transform', // GPU-accelerated
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
    // Usa o hook de typewriter
    const textoAnimado = useTypewriter(FRASES_TYPEWRITER);

    return (
        <section 
            id="topo" 
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 bg-bg0 overflow-hidden"
        >

            {/* Orbe decorativo */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(179,102,255,0.07) 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />

            {/* Particulas de código flutuantes */}
            <CodeParticles />

            {/* Tag de terminal */}
            <div className="font-mono text-xs text-text3 bg-bg2 border border-accent/15 px-3 py-1.5 rounded-full mb-6 animate-fade-in-up">
                hello --world
            </div>

            {/* Nome principal */}
            <h1 
                className="font-sans font-black text-5xl md:text-7xl tracking-tight text-text1 mb-4 animate-fade-in-up"
                style={{ animationDelay: '0.1s', opacity: 0 }}
            >
                
                Olá, sou{' '}
                <em className="text-accent not-italic">
                    {DADOS.nome}
                </em>    
            </h1> 

            {/* Texto animado com cursor piscando */}
            <div 
                className="font-mono text-base md:text-lg text-text2 mb-6 flex items-center justify-center gap-1 animate-fade-in-up"
                style={{ animationDelay: '0.2s', opacity: 0 }}
            >
                <span className="text-accent">&gt; </span>
                <span>{textoAnimado}</span>
                {/* aria-hidden: esconde o cursor do elitor de tela */}
                <span 
                    className="inline-block w-[2px] h-[1.1em] bg-accent align-middle animate-blink" aria-hidden="true"/>
            </div>

            {/* Descrição breve */}
            <p 
                className="text-text2 max-w-lg text-base leading-relaxed mb-10 animate-fade-in-up"
                style={{ animationDelay: '0.3s', opacity: 0 }}
            >
                {DADOS.sobre1}
            </p>

            {/* Botões de ação */}
            <div 
                className="flex gap-4 flex-wrap justify-center animate-fade-in-up"
                style={{ animationDelay: '0.4s', opacity: 0 }}
            >
                <a 
                    href="#projetos" 
                    className="font-mono text-sm font-bold px-6 py-3 bg-accent text-bg0 rounded hover:bg-accent/85 transition-all duration-200 hover:-translate-y-px">
                    ver projetos
                </a>
                <a
                    href={DADOS.github}
                    target="_blank"
                    rel="noopener noreferrer" //evita acesso ao window.opener
                    className="font-mono text-sm font-bold px-6 py-3 border border-accent/40 text-accent rounded hover:bg-accent/10 hover:border-accent/70 transition-all duration-200"
                >
                    github
                </a>    
            </div>

            {/* Seta para baixo */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text3 text-xs font-mono animate-bounce">
                ↓
            </div>   
        </section>
    );
}
