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
        <section id="projetos" className="section">
            <div className="container">

                <SectionLabel>projetos</SectionLabel>
                <h2 className="section__title">O que eu construí</h2>
                <p className="section__desc">
                            Projetos desenvolvidos durante minha formação, aplicando as tecnologias aprendidas em soluções reais.
                </p>

                {/* DESTAQUES */}
                <div className="featured-label">
                    <span className="featured-label__icon">✦</span>
                    projetos em destaque
                </div>

                <div className="featured-grid">
                    {destaque.map((projeto) => (
                        // featured=true passa o estilo especial para o card
                        <ProjetoCard key={projeto.id} projeto={projeto} feature />
                    ))}
                </div>

                {/* FILTRO POR CATEGORIA */}
                <div className="filter-bar">
                    {CATEGORIAS_FILTRO.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${
                                categoriaAtiva === cat ? "filter-btn--active" : ""
                            }`}
                            onClick={() => handleFiltro(cat)}
                        >
                            {cat}
                            {/* Contador: mostra quantos projetos tem em cada categoria */}

                            <span className="filter-btn__count">
                                {cat === "Todos"
                                    ? demaisProjetos.length
                                    : demaisProjetos.filter((p) => p.categoria === cat).length
                                }
                            </span>
                        </button>    
                    ))}
                </div>

                {/* GRID DE PROJETOS */}
                {projetosVisiveis.length === 0? (
                    // Mensagem quando a categoria não tem projetos
                    <div className="empty-filter">
                        Nenhum projeto nesta categoria ainda.
                    </div>
                ) : (
                    <div className="project-grid">
                        {projetosVisiveis.map((projeto) => (
                            <ProjetoCard key={projeto.id} projeto={projeto} />
                        ))}
                    </div>    
                )}

                {/* BOTÃO CARREGAR MAIS */}
                {temMais && (
                    <div className="load-more">
                        <button className="load-more__btn" onClick={handleCarregarMais}>
                            carregar mais
                        </button>
                        <span className="load-more__remaining">
                            +{projetosFiltrados.length - visiveis}projetos
                        </span>
                    </div>    
                )}
                
            </div>
        </section>
    );    
}