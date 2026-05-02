import { DADOS } from "../data/dados";

export function Footer() {
    return (
        <footer className="footer">
            Feito com <span className="footer__heart">&lt;3</span> por {DADOS.nome} 
            {" "}&bull;{" "}
            {new Date().getFullYear()}
        </footer>
    );
}