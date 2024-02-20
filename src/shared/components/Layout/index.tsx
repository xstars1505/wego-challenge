import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
