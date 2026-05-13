export function SectionLabel({children}) {
    return(
        <div className="font-mono text-xs tracking-widest text-accent mb-2 uppercase">
            {/* prefixo de comentário de código */}
            <span className="text-text3">// </span>
            {children}
        </div>
    );
}