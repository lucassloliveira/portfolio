import { DADOS } from "../data/dados";

export function Footer() {
    return (
        <footer className="py-6 text-center font-mono text-xs text-text3 border-t border-accent/10 bg-bg0">
            Feito com{" "} 
            <span className="text-accent">&lt;3</span> 
            {" "}por {DADOS.nome} 
            {" "}&bull;{" "}
            {new Date().getFullYear()}
        </footer>
    );
}