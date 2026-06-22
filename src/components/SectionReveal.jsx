function SectionReveal({ children, className = '', as: Tag = 'section', id }) {
  return (
    <Tag id={id} className={'motion-section ' + className}>
      {children}
    </Tag>
  );
}

export default SectionReveal;
