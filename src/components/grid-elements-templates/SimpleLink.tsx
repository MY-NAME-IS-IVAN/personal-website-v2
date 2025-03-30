const SimpleLink = ({
  link,
  children,
  header = '',
  className = '',
}: {
  link: string;
  children: React.ReactNode;
  header?: string;
  className?: string;
}) => {
  return (
    <a
      className={`grid-block simple-link interactive ${className}`}
      href={link}
      target='_blank'
    >
      <small className='top-title'>{header}</small>
      <small className='bottom-title'>{header}</small>
      {children}
    </a>
  );
};

export default SimpleLink;
