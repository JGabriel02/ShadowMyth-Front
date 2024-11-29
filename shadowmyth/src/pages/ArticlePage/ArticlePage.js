import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();

  const article = {
    1: { title: 'Lançamento do Novo Jogo', content: 'Detalhes completos sobre o lançamento do novo jogo da ShadowMyth...' },
    2: { title: 'Atualização Importante', content: 'Informações sobre a última atualização que corrige bugs e melhora o desempenho...' },
    3: { title: 'Entrevista com o CEO', content: 'Saiba mais sobre o futuro da ShadowMyth....' },
  }[id];

  return (
    <div className="article-page">
      <div className="article-content">
        <h1>{article?.title || 'Artigo não encontrado'}</h1>
        <p>{article?.content || 'Este artigo não existe ou foi removido.'}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
