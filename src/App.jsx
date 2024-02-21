import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleLogin = () => {
    setShowLogin(true);
  };

  const toggleSignup = () => {
    setShowLogin(false);
  };

  return (
    <>
      <Header onLoginClick={toggleLogin} onSignupClick={toggleSignup} />
      <main>
        {showLogin ? <Login /> : <Signup />}
      </main>
    </>
  );
}

export default App;
