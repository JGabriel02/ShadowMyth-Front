
---

## **ShadowMyth-Front**

### **Descrição**
Este repositório contém o código-fonte do site oficial para o **PokeLauncher**, o launcher que reúne 9 hacks rooms de Pokémon selecionados para os fãs. O site serve como um ponto central de interação para os usuários, permitindo o download do launcher, acesso a artigos, notícias e informações sobre a empresa ShadowMyth.

---

### **Principais Funcionalidades**
1. **Página Home**:
   - Banner principal para destacar novidades.
   - Cards para exibir os três artigos mais recentes.
   - Botão para download direto do launcher.

2. **Página "Quem Somos"**:
   - Apresentação da história e missão da ShadowMyth.

3. **Página de Novidades**:
   - Exibição de todos os artigos em formato de cards, organizados para facilitar a navegação.

4. **Artigos Individuais**:
   - Cada artigo tem sua própria página com texto formatado para leitura.

5. **Sistema de Login/Registro**:
   - Permite que os usuários se registrem ou façam login para interagir com o site. (em desenvolvimento) 

---

### **Tecnologias Utilizadas**
- **Frontend**: React.js
- **Roteamento**: React Router Dom
- **Estilização**: CSS (organizado por página)
- **Gerenciamento de Estado**: Hooks do React

---

### **Instalação**

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/JGabriel02/ShadowMyth-Front.git
   cd ShadowMyth-Front
   ```

2. **Instale as Dependências**
   Certifique-se de ter o Node.js instalado. Depois, execute:
   ```bash
   npm install
   ```

3. **Inicie o Servidor**
   ```bash
   npm start
   ```

4. **Acesse no Navegador**
   - O site estará disponível em [http://localhost:3000](http://localhost:3000).

---

### **Como Contribuir**

1. **Faça um Fork do Repositório**
   ```bash
   git fork https://github.com/JGabriel02/ShadowMyth-Front.git
   ```

2. **Crie uma Branch**
   ```bash
   git checkout -b minha-nova-feature
   ```

3. **Realize as Alterações**
   Edite o código e adicione suas melhorias.

4. **Envie um Pull Request**
   Depois de testar suas mudanças, envie um Pull Request para revisão.

---

### **Estrutura do Projeto**
```plaintext
src/
├── components/       # Componentes reutilizáveis (ex: Banner, ArticleCard)
├── pages/            # Páginas principais (Home, About, News, ArticlePage)
├── App.js            # Configuração do roteamento principal
├── index.js          # Entrada do React
├── style.css         # Estilo global do site
public/
├── index.html        # Template principal
```

---

### **Contribuidores**
- **[JGabriel02](https://github.com/JGabriel02)** - Desenvolvedor principal.

---

### **Links Úteis**
- **Repositório do Launcher**: [PokeLauncher](https://github.com/JGabriel02/RetroLauncher)
