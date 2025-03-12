import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type LinkWrapperProps = {
  children: ReactNode;
  link: string;
}

const LinkWrapper = ({ children, link } :LinkWrapperProps) => (
  <Link to={link}>
    {children}
  </Link>
);

export default LinkWrapper;
