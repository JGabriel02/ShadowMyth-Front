import React from 'react';
import './News.css';
import ArticleCard from '../../components/ArticleCard';

const News = () => {
  const articles = [
    { id: 1, title: 'Lançamento do Novo Jogo', description: 'O jogo mais aguardado do ano está aqui!' },
    { id: 2, title: 'Atualização Importante', description: 'Corrigimos bugs e melhoramos o desempenho.' },
    { id: 3, title: 'Entrevista com o CEO', description: 'Saiba mais sobre o futuro da ShadowMyth.' },
  ];

  return (
    <div className="news">
      <h2>Novidades</h2>
      <div className="news-cards">
        {articles.map((article) => (
          <ArticleCard key={article.id} title={article.title} description={article.description} id={article.id} />
        ))}
      </div>
    </div>
  );
};

export default News;
