function SectionLabel({ children }) {
    return (
        <div className="section-label">
            <span className="section-label__prefix">//</span>
            {children}
        </div>
    );
}

export default SectionLabel;