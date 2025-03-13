import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type LinkWrapperProps = {
  children: ReactNode;
  link: string;
  className?: string;
}

const LinkWrapper = ({ children, link, className = ''} :LinkWrapperProps) => (
  <Link to={link} className={className || undefined}>
    {children}
  </Link>
);

export default LinkWrapper;
