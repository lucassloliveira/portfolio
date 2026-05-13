import { useState } from 'react';

/**
 * Mapa de cores por categoria do projeto
 * Tailwind precisa das classes completas para o purge funcionar
 */
const CATEGORIA_STYLES = {
  Frontend:   'bg-blue/10 text-blue border-blue/25',
  'Back-end': 'bg-[#ff6b6b]/10 text-[#ff6b6b] border-[#ff6b6b]/25',
  'Full-Stack':'bg-[#27c93f]/10 text-[#27c93f] border-[#27c93f]/25',
};

export function ProjetoCard({ projeto, feature = false }) {
  const [hovered, setHovered] = useState(false);

  const categoriaStyle =
    CATEGORIA_STYLES[projeto.categoria] ?? 'bg-accent/10 text-accent border-accent/25';

    return (
        <article 
            className={[
            // Base
            'relative flex flex-col gap-4 rounded-xl p-6',
            'border transition-all duration-300',
            // Hover
            hovered
                ? 'border-accent/35 bg-bg2 shadow-[0_0_30px_rgba(179,102,255,0.07)] -translate-y-0.5'
                : 'border-accent/12 bg-bg1',
            // Card destaque tem border levemente diferente
            feature ? 'border-accent/20' : '',
            ].join(' ')}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Preview: screenshot ou emoji */}
            {projeto.imagem ? (
            <div className="relative w-full h-40 overflow-hidden bg-bg0 shrink-0">
                <img
                    src={projeto.imagem}
                    alt={`Screenshot de ${projeto.titulo}`}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg2/80 pointer-events-none" />
            </div>
            ) : (
            <div className="w-full h-20 flex items-center justify-center bg-bg0/60 text-4xl border-b border-accent/8">
                {projeto.emoji}
            </div>
            )}

            {/* Badge de destaque */}
            {projeto.destaque && (
                <span className="absolute top-4 right-4 font-mono text-[10px] text-accent/80 bg-accent/10 border border-accent/25 px-2 py-0.5 rounded-full">
                    ✦ destaque
                </span>
            )}

            {/* Tag de categoria */}
            <span 
                className={`font-mono text-[10px] px-2.5 py-1 rounded-full border self-start ${categoriaStyle}`}
            >
                {projeto.categoria}    
            </span>   

            {/* Título e descrição */}
            <h3 className="font-sans font-bold text-lg text-text1 leading-tight">
                {projeto.titulo}
            </h3>
            <p className="text-text2 text-sm leading-relaxed flex-1">
                {projeto.descricao}
            </p>

            {/* Tags de tecnologias */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {projeto.tecnologias.map((tech) => (
                    <span 
                        key={tech} 
                        className="font-mono text-[10px] px-2 py-1 bg-bg0/70 border border-accent/12 text-text3 rounded">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links para GitHub e Demo */}
            {(projeto.github || projeto.demo) && (
                <div className="pt-1 flex items-center gap-4 flex-wrap">
                    {projeto.github && (
                        <a
                            href={projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-text2 hover:text-accent transition-colors underline-offset-4 hover:underline"
                        >
                            GitHub →
                        </a>
                        )}
                        {projeto.demo && (
                        <a
                            href={projeto.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs font-bold px-3 py-1 bg-accent/15 text-accent border border-accent/35 rounded hover:bg-accent hover:text-bg0 transition-all duration-200"
                        >
                            ▶ demo
                        </a>
                    )}
                </div>
            )}
        </article>    
    );
}