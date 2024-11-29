import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <form className="register-form">
        <h2>Registrar</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
