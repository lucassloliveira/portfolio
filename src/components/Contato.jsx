import { useState } from "react";
import { DADOS } from "../data/dados";
import { SectionLabel } from "./ui/SectionLabel";

const FORMSPREE_ID = 'https://formspree.io/f/mzdowrba';

export function Contato() {
    // Estado do formulário
    const [campos, setCampos] = useState({ nome: '', email: '', mensagem: '' });
    // Status: idle | enviado | sucesso | erro
    const [status, setStatus] = useState('idle');

    function handleChange(e) {
        setCampos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('enviando');

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });

            if (res.ok) {
                setStatus('sucesso');
                setCampos({ nome: '', email: '', mensagem: '' });
            } else {
                setStatus('erro');
            }
        } catch {
            setStatus('erro')
        }
    }

    // Classes compartilhadas para inputs
    const inputBase =
        'w-full bg-bg1 border border-accent/20 rounded px-4 py-3 font-mono text-sm text-text1 placeholder-text3 outline-none transition-all duration-200 focus:border-accent/60 focus:bg-bg2';

    return (
        <section id="contato" className="bg-bg0 py-20 px-5 md:px-10">
            <div className="max-w-xl mx-auto">

                <div className="text-center mb-10">
                    <SectionLabel>Contato</SectionLabel>
                    <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text1 tracking-tight mb-3">
                        Vamos conversar?
                    </h2>
                    <p className="text-text2 leading-relaxed text-[0.95rem]">
                        Estou aberto a oportunidades, projetos e trocas de experiência. Respondo em até 24h.
                    </p>
                </div>

                {/* FORMULÁRIO */}
                {status === 'sucesso' ? (

                    // Mensagem de sucesso
                    <div className="text-center py-12 px-6 bg-bg1 border border-accent/20 rounded-xl">
                        <div className="text-4xl mb-4">✅</div>
                        <p className="font-sans font-bold text-text1 text-lg mb-2">
                            Mensagem enviada!
                        </p>
                        <p className="text-text2 text-sm mb-6">
                            Obrigado pelo contato. Responderei em breve.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="font-mono text-xs text-accent border border-accent/30 px-5 py-2 rounded hover:bg-accent/10 transition-colors"
                        >
                            enviar outra mensagem
                        </button>    
                    </div>
                ) : (

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                        {/* Nome */}
                        <div>
                            <label htmlFor="nome" className="block font-mono text-xs text-text3 mb-1.5">
                                nome <span className="text-accent">*</span>
                            </label>
                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                required
                                placeholder="Lucas Luz"
                                value={campos.nome}
                                onChange={handleChange}
                                className={inputBase}
                            />    
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block font-mono text-xs text-text3 mb-1.5">
                                e-mail <span className="text-accent">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="voce@email.com"
                                value={campos.email}
                                onChange={handleChange}
                                className={inputBase}
                            />    
                        </div>

                        {/* Mensagem */}
                        <div>
                            <label htmlFor="mensagem" className="block font-mono text-xs text-text3 mb-1.5">
                                mensagem <span className="text-accent">*</span>
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                required
                                rows={5}
                                placeholder="Olá Lucas, vi seu portfólio e..."
                                value={campos.mesnagem}
                                onChange={handleChange}
                                className={`${inputBase} resize-none`}
                            />    
                        </div>

                        {/* Erro */}
                        {status === 'erro' && (
                            <p className="font-mono text-xs text-[#ff6b6b] bg-[#ff6b6b]/10 border border-[#ff6b6b]/25 px-4 py-2.5 rounded">
                                Algo deu errado. Tente novamente ou me contate por e-mail.
                            </p>
                        )}

                        {/* Botão de envio */}
                        <button
                            type="submit"
                            disabled={status === 'enviando'}
                            className={[
                                'w-full font-mono text-sm font-bold py-3 rounded transition-all duration-200',
                                status === 'enviando'
                                    ? 'bg-accent/40 text-bg0/70 cursor-not-allowed'
                                    : 'bg-accent text-bg0 hover:bg-accent/85 hover:-translate-y-px',
                            ].join(' ')}
                        >
                            {status === 'enviando' ? 'enviando ...' : 'enviar mensagem'}    
                        </button>  

                    </form>
                )}

                {/* Links */}
                <div className="mt-10 pt-8 border-t border-accent/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a  
                        href={`mailto:${DADOS.email}`}
                        className="font-mono text-xs text-text2 hover:text-accent transition-colors"
                    >
                        {DADOS.email}    
                    </a>    
                    <span className="hidden sm:block text-text3">.</span>
                    <a 
                        href={DADOS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-text2 hover:text-accent transition-colors"
                    >
                        GitHub
                    </a>
                    <span className="hidden sm:block text-text3">.</span>
                    <a 
                        href={DADOS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-text2 hover:text-accent transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
                
            </div>
        </section>
    );
}