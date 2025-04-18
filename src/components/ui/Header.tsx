
import React from 'react';
import logo from '../../assets/logo.png'; 

interface HeaderProps {
  // props
}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Your Logo"
          className="logo"
          style={{ cursor: 'pointer' }} 
        />
      </div>
    </header>
  );
};

export default Header;