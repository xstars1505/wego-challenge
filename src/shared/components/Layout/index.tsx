import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div data-testid="layout-container" className="container">
      {children}
    </div>
  );
};

export default Layout;
