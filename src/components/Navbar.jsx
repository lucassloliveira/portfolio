import { useEffect, useState } from "react";
import { DADOS } from "../data/dados";

export function Navbar() {
    // Estado: navbar com fundo ao rolar a página
    const [scrolled, setScrolled] = useState(false);

    // Estado: qual seção está ativa (para destacar o link)
    const [secaoAtiva, setSecaoAtiva] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            // Ativa o fundo da navbar após 50px de scroll
            setScrolled(window.scrollY > 50);

            // Detecta qual seção está visívelna tela
            const secoes = ["sobre", "projetos", "habilidades", "contato"];
            for (const id of secoes) {
                const el = document.getElementById(id);
                if(el) {
                    const react = el.getBoundingClientRect();
                    // A seção está visível se o topo está acima de 100px e o rodapé ainda não passou de 100px
                    if (react.top <= 100 && react.bottom >= 100) {
                        setSecaoAtiva(id);
                        break
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup: remove o listener quando o componente desmonta
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const navLinks = [
        { href: "#sobre", label: "sobre" },
        { href: "#projetos", label: "projetos" },
        { href: "#habilidades", label: "habilidades" },
        { href: "#contato", label: "contato" },
    ];

    return (
            <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
                {/* Logo com nome em formato de tag HTML */}
                <a href="#topo" className="navbar__logo">
                    <span className="navbar__logo-bracket">&lt;</span>
                    {DADOS.nome.split(" ")[0].toLowerCase()}
                    <span className="navbar__logo-bracket">&gt;</span>
                </a>

                {/* Links de navegação */}
                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href}
                            className={`navbar__link ${
                                secaoAtiva === link.href.slice(1) ? "navbar__link--active" : ""
                            }`}
                        >
                            <span className="navbar__link-prefix">// </span>
                            {link.label}
                        </a>   
                    ))}
                </div>
            </nav>
    );
}
