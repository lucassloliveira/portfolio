// Componentes da seção
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";
import { Projetos } from "./components/Projetos";
import { Habilidades } from "./components/Habilidades";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

export default function Portfolio() {
    return (
        <div className="min-h-screen w-full">
            <Navbar />

            <main>
                <Hero />
                <Sobre />
                <Projetos />
                <Habilidades />
                <Contato />
            </main>

            <Footer /> 
        </div>
    );
}