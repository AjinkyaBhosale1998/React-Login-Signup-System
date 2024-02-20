import React from 'react';
import logoImg from '../assets/logo.jpg';

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="signin" />
      <h1>Log In</h1>
    </header>
  );
}

export default Header;
