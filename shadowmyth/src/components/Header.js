import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, username, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    onLogout();
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">ShadowMyth</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Quem Somos?</Link>
        <Link to="/news">Novidades</Link>
        {isLoggedIn ? (
          <div className="user-menu">
            <div className="user-icon" onClick={handleIconClick}>
              👤
            </div>
            {menuOpen && (
              <div className="dropdown-menu">
                <p>Bem-vindo, {username}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
