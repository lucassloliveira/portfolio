import { useState } from "react";
import { HABILIDADES } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";
import { Divider } from "./ui/Divider";

// Tag de uma skill 
function SkillTag({ skill }) {
    const [tooltip, setTooltip] = useState(false);

    // Classe base: igual nos 3 estados
    const base = "relative flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full border transition-colors";

    // Classes que variam por estado
    const variacao = skill.locked
        ? 'border-accent/60 text-accent bg-accent/5 animate-[studyBorder_1.5s_ease-in-out_infinite]'
        : skill.locked
        ? 'border-text3/20 text-text3 bg-transparent opacity-50 cursor-default'
        : 'border-accent/25 text-text2 bg-bg0/40';


    return (
        <div
            className={`${base} ${variacao}`}
            onMouseEnter={() => skill.locked && setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
        >
            {/* Estudando agora */}
            {skill.studying && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-study-pulse" />
            )}

            {/* Desbloqueada */}
            {!skill.studying && !skill.locked && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            )}

            {/* Bloqueada */}
            {skill.locked && (
                <span className="w-1.5 h-1.5 rounded-full bg-text3 shrink-0" />
            )}

            {/* Nome da skill */}
            {skill.nome}

            {/* Label "estudando agora" só no estado de studying */}
            {skill.studying && (
                <span className="text-accent/60 text-[9px] ml-0.5">
                    estudando
                </span>
            )}

            {/* Cadeado no estado locked */}
            {skill.locked && (
                <span className="ml-auto text-[10px]" aria-hidden="true">
                    🔒
                </span>
            )}

            {/* Tooltip */}
            {skill.locked && tooltip && (
                <div 
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-bg0 border border-accent/20 rounded text-[10px] text-text2 whitespace-nowrap z-10 pointer-events-none" 
                    role="tooltip"
                >
                    {skill.tip || "bloqueado - em breve"}
                    {/* Seta */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent/20" />
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
        <div className="bg-bg2 border border-accent/12 rounded-xl p-5 flex flex-col gap-4 hover:border-accent/25 transition-colors">

            {/* Cabeçalho */}
            <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-accent tracking-wider">
                    {grupo.categoria}
                </span>
                <span className="font-mono text-[10px] text-text3">
                    {desbloqueadas}/{total}
                </span>
            </div>

            <div className="flex flex-wrap gap-2">
                {grupo.skills.map((skill) => (
                    <SkillTag key={skill.nome} skill={skill} />
                ))}
            </div>

            {/* Barra de progresso */}
            <div className="mt-auto space-y-1.5">
                <div className="h-1 bg-bg0 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-accent opacity-60 rounded-full transition-all duration-500"
                        style={{ width: `${porcentagem}%` }}
                    />    
                </div>
                <p className="font-mono text-[10px] text-text3 text-right">
                    {porcentagem}% desbloqueado
                </p>
            </div>
        </div>
    );
}

export function Habilidades() {
    return (
        <section id="habilidades" className="bg-bg1 py-20 px-5 md:px-10">
            <div className="max-w-5xl mx-auto">

                <SectionLabel>habilidades</SectionLabel>
                <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text1 tracking-tight mb-1">
                    Tecnologias & Ferramentas
                </h2>
                <Divider />

                {/* Legenda dos estados */}
                <div className="flex flex-wrap gap-6 mb-10 font-mono text-xs text-text2">

                    {/* Desbloqueado */}
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        desbloqueado
                    </div>

                    {/* Estudando agora */}
                    <div className="flex items-center gap-2">
                        {/* Ponto pulsante */}
                        <span className="w-2 h-2 rounded-full bg-accent animate-study-pulse" />
                        estudando agora
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-text3 opacity-50" />
                        bloqueado
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {HABILIDADES.map((grupo) => (
                        <CategoriaCard key={grupo.categoria} grupo={grupo} />
                    ))}
                </div>
                
            </div>
        </section>
    );
}