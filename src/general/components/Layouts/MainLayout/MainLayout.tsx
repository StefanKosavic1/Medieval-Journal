import React from 'react';
import './MainLayout.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default MainLayout;
