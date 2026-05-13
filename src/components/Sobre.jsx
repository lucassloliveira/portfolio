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
        <div className="bg-bg2 border border-accent/15 rounded-xl overflow-hidden font-mono shadow-[0_0_40px_rgba(179,102,255,0.06)]">

            {/* Barra de título */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-bg0/60 border-b border-accent/10">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="text-text3 text-xs ml-2">
                    perfil.jsx
                </span>
            </div>

            {/* Área da foto / iniciais */}
            <div className="px-6 pt-8 pb-4 flex flex-col items-center gap-4">
                <div className="relative w-24 h-24">
                    {DADOS.foto ? (
                        <img
                            src={DADOS.foto}
                            alt={`Foto de ${DADOS.nome}`}
                            className="w-full h-full rounded-full object-cover border-2 border-accent/30"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex"
                            }}
                        />    
                    ) : null}

                        {/* Fallback: inciais quando não há foto */}
                        <span
                            className="w-24 h-24 rounded-full bg-bg1 border-2 border-accent/30 text-accent font-bold text-2xl flex items-center justify-center"
                            style={{ display: DADOS.foto ? "none" : "flex" }}
                        >
                            {iniciais}    
                        </span>

                        {/* Indicador de online */}
                        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#27c93f] rounded-full border-2 border-bg2" />
                    </div>
            </div>    

            {/* Nome */}        
            <div className="px-4 py-2.5 border-t border-accent/10 text-sm text-text2">
                <span className="text-accent">&lt;</span>
                {DADOS.nome.split(" ")[0].toLocaleLowerCase()}
                <span className="text-accent">&gt; </span> 
            </div>  

            {/* Role */}
            <div className="px-4 py-2 border-t border-accent/10 text-xs text-text2">
                <span className="text-accent mr-1">&gt; </span>
                {DADOS.foco}
            </div>   

            {/* Links sociais */}
            <div className="px-4 py-3 flex gap-5 border-t border-accent/10">
                <a
                    href={DADOS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text2 hover:text-accent transition-colors"
                >
                    <span className="text-accent mr-0.5">$ </span>github
                </a>
                <a            
                    href={DADOS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text2 hover:text-accent transition-colors"
                >
                    <span className="text-accent mr-0.5">$ </span>linkedin
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
        <section id="sobre" className="bg-bg1 py-20 px-5 md:px-10">
            <div className="max-w-5xl mx-auto">

                <SectionLabel>Sobre</SectionLabel>
                <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text1 tracking-tight mb-1">
                    Quem sou eu
                </h2>
                <Divider />

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Coluna de texto */}
                    <div className="space-y-4 text-text2 leading-relaxed text-[0.95rem]">
                        <p>{DADOS.sobre1}</p>
                        <p>{DADOS.sobre2}</p>
                        <p>{DADOS.sobre3}</p>

                        {/* Informações rápidas */}
                        <div className="mt-6 space-y-3 pt-4 border-t border-accent/10">
                            {infoItems.map((item) => (
                                    <div key={item.label} className="flex items-center gap-3 font-mono text-xs">
                                        <span className="text-text3 w-28 shrink-0">
                                            {item.label}:
                                        </span>
                                        <span className="text-text1">
                                            {item.valor}
                                        </span>
                                    </div>    
                            ))}
                        </div>
                    </div>

                    {/* Card de avatar */}
                    <div>
                        <Avatar />
                    </div>

                </div>
            </div>
        </section>
    );
}
