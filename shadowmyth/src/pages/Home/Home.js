import React from 'react';
import './Home.css';
import Banner from '../../components/Banner';
import ArticleCard from '../../components/ArticleCard';

const Home = () => {
  const articles = [
    { id: 1, title: 'Lançamento Oficial: PokeLauncher', description: 'O PokeLauncher chegou, trazendo a experiência definitiva para os fãs de Pokémon!!' },
    { id: 2, title: 'Atualização Importante', description: 'Corrigimos bugs e melhoramos o desempenho.' },
    { id: 3, title: 'Entrevista com o CEO', description: 'Saiba mais sobre o futuro da ShadowMyth.' },
  ];

  return (
    <div className="home">
      <Banner />
      <div className="cards">
        {articles.map((article) => (
          <ArticleCard key={article.id} title={article.title} description={article.description} id={article.id} />
        ))}
      </div>
      <div className="download-button-container">
        <a
          className="download-button"
          href="https://drive.google.com/uc?export=download&id=1jnWCwkplbafiC0XySdV7H9Eam-61zCjy"
           target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Home;
