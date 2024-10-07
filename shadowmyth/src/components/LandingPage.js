import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo ao Launcher de Jogos Retro</h1>
      <p style={styles.description}>Explore e jogue seus jogos favoritos de antigamente em um só lugar.</p>
      <Link to="/login" style={styles.button}>Entrar</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '3rem',
    color: '#333',
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#666',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
  }
};

export default LandingPage;
