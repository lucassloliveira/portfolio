import { useEffect, useState } from "react";

export function useTypewriter(frases) {
    const [texto, setTexto] = useState("");           // texto visível  na tela
    const [fraseIndex, setFraseIndex] = useState(0);  // qual frase está ativa
    const [charIndex, setCharIndex] = useState(0);    // posição do caractere atual
    const [apagando, setApagando] = useState(false);  // está apagando ou digitando?

    useEffect(() => {
        const fraseAtual = frases[fraseIndex];

        const timeout = setTimeout(() => {
            if(!apagando) {
                //Digitando: adiciona um caractere
                setTexto(fraseAtual.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                // Quando terminar de digitar, espera antes de apagar
                if (charIndex + 1 === fraseAtual.length) {
                    setTimeout(() => setApagando(true), 1900);
                }
            } else {
                // Apagando: remove um caractere
                setTexto(fraseAtual.slice(0, charIndex - 1));
                setCharIndex((prev) => prev- 1);

                // Quando terminar de apagar, vai para próxima frase
                if (charIndex - 1 === 0) {
                    setApagando(false);
                    setFraseIndex((prev) => (prev + 1) % frases.length);
                }
            }
        }, apagando ? 45 : 90);

        // Cleanup: cancela o timeout quado o componente re-renderiza
        return () => clearTimeout(timeout);
    }, [charIndex, apagando, fraseIndex, frases]);

    return texto;
};