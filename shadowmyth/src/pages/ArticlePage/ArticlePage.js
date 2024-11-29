import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();

  const article = {
    1: {
      title: 'Lançamento Oficial: PokeLauncher',
      content: `
        <p><strong>O <em>PokeLauncher</em> chegou!</strong> A experiência definitiva para os fãs de Pokémon.</p>
        <p>Com 9 *Hacks ROMs* cuidadosamente selecionados, este aplicativo é a maneira mais prática de acessar e jogar seus jogos favoritos de Pokémon.</p>
        <h2>Por que o PokeLauncher é perfeito para você?</h2>
        <ul>
          <li>Interface elegante e organizada.</li>
          <li>Fácil de usar: basta baixar, descompactar e acessar o executável.</li>
          <li>Emulador embutido.</li>
          <li>Navegação simples e organizada.</li>
        </ul>
        <h3>Lista de jogos disponíveis:</h3>
        <ol>
          <li>Pokémon Radical Red</li>
          <li>Pokémon Gaia</li>
          <li>Pokémon Liquid Crystal</li>
          <li>Pokémon Sword/Shield Ultimate</li>
          <li>Pokémon Verde Musgo</li>
          <li>Pokémon Fusion 3</li>
          <li>Pokémon Light Platinum</li>
          <li>Pokémon Emerald Randomizer</li>
          <li>Pokémon Blue Stars 4</li>
        </ol>
        <h2>Como começar?</h2>
        <p>1. Clique no botão <strong>Download</strong> na pagina Home.</p>
        <p>2. Descompacte o arquivo baixado.</p>
        <p>3. Acesse o arquivo executável na pasta extraída.</p>
        <p>Baixe agora o <em>PokeLauncher</em> e leve suas aventuras Pokémon para o próximo nível!</p>
      `,
    },
    2: {
      title: 'Atualização Importante',
      content: `
        <p>Corrigimos bugs e melhoramos o desempenho no PokeLauncher.</p>
      `,
    },
    3: {
      title: 'Entrevista com o CEO',
      content: `
        <p>Saiba mais sobre o futuro da ShadowMyth e os planos para novos jogos.</p>
      `,
    }
  }[id];

  return (
    <div className="article-page">
      <div className="article-content">
        <h1>{article?.title || 'Artigo não encontrado'}</h1>
        <div
          className="article-text"
          dangerouslySetInnerHTML={{ __html: article?.content || 'Este artigo não existe ou foi removido.' }}
        />
        

      </div>
    </div>
  );
};

export default ArticlePage;
