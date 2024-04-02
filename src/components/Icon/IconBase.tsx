const IconBase: React.FC<any> = ({ title, children, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="currentColor" {...props}>
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};

IconBase.displayName = 'IconBase';

export default IconBase;
