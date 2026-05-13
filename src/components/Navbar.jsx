import { useEffect, useState } from "react";
import { DADOS } from "../data/dados";

export function Navbar() {
    // Estado: navbar com fundo ao rolar a página
    const [scrolled, setScrolled] = useState(false);

    // Estado: qual seção está ativa (para destacar o link)
    const [secaoAtiva, setSecaoAtiva] = useState("");

    // Menu Hamburguer 
    const [menuAberto,  setMenuAberto]  = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Ativa o fundo da navbar após 50px de scroll
            setScrolled(window.scrollY > 50);

            // Detecta qual seção está visívelna tela
            const secoes = ["sobre", "projetos", "habilidades", "contato"];
            for (const id of secoes) {
                const el = document.getElementById(id);
                if(el) {
                    const rect = el.getBoundingClientRect();
                    // A seção está visível se o topo está acima de 100px e o rodapé ainda não passou de 100px
                    if (rect.top <= 100 && rect.bottom >= 100) {
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

    // Fecha com Escape
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') setMenuAberto(false); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    // Trava o scroll do body quando o meu está aberto
    useEffect (() => {
        document.body.style.overflow = menuAberto ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuAberto]);

    const navLinks = [
        { href: "#sobre",       label: "sobre",       num: '01' },
        { href: "#projetos",    label: "projetos",    num: '02' },
        { href: "#habilidades", label: "habilidades", num: '03' },
        { href: "#contato",     label: "contato",     num: '04' },
    ];

    return (
        <>
         <nav className={[
            'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 transition-all duration-300',
            scrolled ? 'bg-bg0/65 backdrop-blur-md border-b border-accent/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent',
         ].join(' ')}>

            {/* Logo */}
            <a href="#topo" className="font-mono text-sm font-bold tracking-wider text-accent">
                <span className="text-text3">&lt;</span>
                {DADOS.nome.split(' ')[0].toLocaleLowerCase()}
                <span className="text-text3">&gt;</span>
            </a>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                    const isActive = secaoAtiva === link.href.slice(1);
                    return (
                        <a key={link.href} href={link.href}
                            className={`font-mono text-xs tracking-wider transition-colors duration-200 ${isActive ? 'text-accent' : 'text-text2 hover:text-text1'}`}>
                            <span className="text-text3">// </span>{link.label}
                        </a>
                    );
                })}
            </div>

            {/* Botão só no mobile */}
            <button
                onClick={() => setMenuAberto((v) => !v)}
                aria-expanded={menuAberto}
                aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
                {/* 3 linhas que animam para X */}
                <span className={`block h-px w-6 bg-accent transition-all duration-300 origin-center ${menuAberto ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-px bg-accent transition-all duration-300 ${menuAberto ? 'w-0 opacity-0' : 'w-4'}`} />
                <span className={`block h-px w-6 bg-accent transition-all duration-300 origin-center ${menuAberto ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
         </nav>

         {/* Ovberlay escurecido */}
         <div
            onClick={() => setMenuAberto(false)}
            className={`fixed inset-0 z-40 bg-bg0/80 transition-opacity duration-300 md:hidden ${menuAberto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
         />   

         {/* Drawer mobile */}
         <div className={`fixed top-0 right-0 z-40 h-full w-64 bg-bg1 border-l border-accent/15 flex flex-col pt-24 pb-10 px-8 transition-transform duration-300 ease-in-out md:hidden ${menuAberto ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <nav className="flex flex-col gap-1">
                    {navLinks.map((link, i) => {
                        const isActive = secaoAtiva === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuAberto(false)}
                                className={`flex items-center gap-3 py-3 font-mono text-sm border-b border-accent/8 transition-all duration-200 ${isActive ? 'text-accent' : 'text-text2 hover:text-text1'}`}
                                //Delay
                                style={{ transitionDelay: menuAberto ? `${i * 55}ms` : '0ms' }}
                            >
                                <span className="text-text3 text-xs">{link.num}</span>
                                {link.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Links no rodapé do drawer */}
                <div className="mt-auto flex gap-4">
                    <a href={DADOS.github} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-text3 hover:text-accent transition-colors">
                        github
                    </a>
                    <a href={DADOS.linkedin} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-text3 hover:text-accent transition-colors">
                        linkedin
                    </a>
                </div>
         </div>
        </>
    );
}
