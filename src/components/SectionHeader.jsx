function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={'section-header section-header--' + align}>
      {eyebrow && (
        <div className="section-kinetic-mask" aria-hidden="true">
          <div className="section-kinetic-title">{eyebrow}</div>
        </div>
      )}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionHeader;
