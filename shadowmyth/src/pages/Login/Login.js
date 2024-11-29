import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Credenciais temporárias
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    // Verificar se o e-mail e senha são válidos
    if (email === validEmail && password === validPassword) {
      onLogin();  // Define o usuário como logado
      navigate('/');  // Redireciona para a página inicial
    } else {
      setError('E-mail ou senha incorretos');
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
        <Link to="/register" className="register-button">
          Registrar
        </Link>
      </form>
    </div>
  );
};

export default Login;
