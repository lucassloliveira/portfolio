export function SectionLabel({children}) {
    return(
        <div className="section-label">
            {/* prefixo de comentário de código */}
            <span className="section-label__prefix">// </span>
            {children}
        </div>
    );
}