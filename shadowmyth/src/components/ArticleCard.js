import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, description, id }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/article/${id}`}>Leia Mais</Link>
    </div>
  );
};

export default ArticleCard;
