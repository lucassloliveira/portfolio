import { useState } from "react";
import { PROJETOS, CATEGORIAS_FILTRO, PROJETOS_POR_PAGINA } from "../data/dados";
import { ProjetoCard } from "./ProjetoCard";
import { SectionLabel } from "./ui/SectionLabel";

export function Projetos() {
    // ===== ESTADOS =====

    // Qual botão de filtro está selecionado ("Todos" por padrão)
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

    // Quantos projetos de grid estão visíveis no momento
    const [visiveis, setVisiveis] = useState(PROJETOS_POR_PAGINA);
 
    // ===== SEPARAÇÃO DOS PROJETOS =====

    // Projetos com destaque: true vão para o topo
    const destaque = PROJETOS.filter((p) => p.destaque);

    // Projetos com destaque: false vão para o grid com filtro
    const demaisProjetos = PROJETOS.filter((p) => !p.destaque);

    // Lógica de filtro

    // Se "Todos" selecionado: mostra todos | senão: filtra por categoria
    const projetosFiltrados =
        categoriaAtiva === "Todos"
        ? demaisProjetos
        : demaisProjetos.filter((p) => p.categoria === categoriaAtiva);
    
    // Aplica o limite de projetos visíveis (Load More)
    const projetosVisiveis = projetosFiltrados.slice(0, visiveis);
    
    // Verifica se ainda há projetos escondidos para exibir
    const temMais = visiveis < projetosFiltrados.length;

    // ===== HANDLERS =====

    // Ao clicar em um filtro: muda a categoria e resta o "load more"
    function handleFiltro(categoria) {
        setCategoriaAtiva(categoria);
        setVisiveis(PROJETOS_POR_PAGINA); // volta ao início ao filtrar
    }

    // Ao clicarem "Carregar Mais": aumenta o número de projetos visíveis
    function handleCarregarMais() {
        setVisiveis((prev) => prev + PROJETOS_POR_PAGINA);
    }

    // ===== RENDERIZAÇÃO =====
    return (
        <section id="projetos" className="bg-bg0 py-20 px-5 md:px-10">
            <div className="max-w-5xl mx-auto">

                <SectionLabel>projetos</SectionLabel>
                <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text1 tracking-tight mb-1">
                    O que eu construí
                </h2>
                <p className="text-text2 text-[0.92rem] leading-relaxed mb-10 max-w-xl">
                            Projetos desenvolvidos durante minha formação, aplicando as tecnologias aprendidas em soluções reais.
                </p>

                {/* DESTAQUES */}
                <div className="flex items-center gap-2 font-mono text-xs text-accent/70 mb-4">
                    <span>✦</span>
                    <span>projetos em destaque</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-14">
                    {destaque.map((projeto) => (
                        // featured=true passa o estilo especial para o card
                        <ProjetoCard key={projeto.id} projeto={projeto} feature />
                    ))}
                </div>

                {/* FILTRO POR CATEGORIA */}
                <div className="flex flex-wrap gap-2 mb-8">
                          {CATEGORIAS_FILTRO.map((cat) => {
                            const isActive = categoriaAtiva === cat;
                            const count =
                              cat === 'Todos'
                                ? demaisProjetos.length
                                : demaisProjetos.filter((p) => p.categoria === cat).length;
                
                            return (
                              <button
                                key={cat}
                                onClick={() => handleFiltro(cat)}
                                className={[
                                  'font-mono text-xs px-4 py-1.5 rounded-full border',
                                  'flex items-center gap-2 transition-all duration-200',
                                  isActive
                                    ? 'bg-accent/15 border-accent text-accent'
                                    : 'bg-transparent border-accent/20 text-text2 hover:text-text1 hover:border-accent/45',
                                ].join(' ')}
                              >
                                {cat}
                                {/* Contador */}
                                <span
                                  className={`text-[10px] ${
                                    isActive ? 'text-accent/70' : 'text-text3'
                                  }`}
                                >
                                  {count}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                {/* GRID DE PROJETOS */}
                {projetosVisiveis.length === 0? (
                    // Mensagem quando a categoria não tem projetos
                    <div className="font-mono text-sm text-text3 py-10 text-center">
                        Nenhum projeto nesta categoria ainda.
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {projetosVisiveis.map((projeto) => (
                            <ProjetoCard key={projeto.id} projeto={projeto} />
                        ))}
                    </div>    
                )}

                {/* BOTÃO CARREGAR MAIS */}
                {temMais && (
                    <div className="mt-10 flex flex-col items-center gap-2">
                        <button 
                            onClick={handleCarregarMais}
                            className="font-mono text-sm px-8 py-2.5 border border-accent/30 text-text2 rounded hover:border-accent hover:text-accent transition-all duration-200" 
                        >
                            carregar mais
                        </button>
                        <span className="font-mono text-xs text-text3">
                            + {projetosFiltrados.length - visiveis}projetos
                        </span>
                    </div>    
                )}
                
            </div>
        </section>
    );    
}