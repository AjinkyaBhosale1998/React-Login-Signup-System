import React from 'react';
import logoImg from '../assets/logo.jpg';

const Header = ({ onLoginClick, onSignupClick }) => {
  return (
    <header>
      <img src={logoImg} alt="signin" />
      <div className="header-buttons">
        <button onClick={onLoginClick} className="header-button">Sign In</button>
        <button onClick={onSignupClick} className="header-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
