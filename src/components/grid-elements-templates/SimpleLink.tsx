const SimpleLink = ({
  link,
  children,
  className = '',
}: {
  link: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      className={`grid-block simple-link interactive ${className}`}
      href={link}
      target='_blank'
    >
      {children}
    </a>
  );
};

export default SimpleLink;
