# PokéApp

PokéApp é um aplicativo web que permite aos usuários buscar, visualizar e favoritar Pokémons. O projeto foi desenvolvido utilizando **ReactJS** com **TypeScript**, consumindo a API PokéAPI para obter os dados dos Pokémons.

## 📌 Funcionalidades
- 🔍 **Busca de Pokémons** pelo nome.
- ⭐ **Favoritar Pokémons** e armazenar localmente no navegador.
- 📜 **Listagem de Pokémons favoritos** em uma página dedicada.
- 📱 **Design responsivo** para diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas
- **ReactJS** + **TypeScript**
- **Bootstrap** (para estilização)
- **Vite** (para build e otimização)
- **React Router** (para navegação entre páginas)
- **LocalStorage** (para armazenar favoritos no navegador)

## 📂 Estrutura do Projeto

```
/src
  |-- api/
  |     |-- pokeApi.ts      # Funções para consumir a PokéAPI
  |-- assets/               # Imagens e recursos estáticos
  |-- components/           # Componentes reutilizáveis
  |     |-- CardPokemon.tsx
  |     |-- Navbar.tsx
  |     |-- SearchBar.tsx
  |-- hooks/
  |     |-- useFavorites.ts # Hook customizado para gerenciar favoritos
  |-- pages/
  |     |-- Home.tsx        # Página inicial com busca
  |     |-- Favorites.tsx   # Página de favoritos
  |-- App.tsx               # Componente principal
  |-- main.jsx              # Ponto de entrada do React
  |-- index.html            # Arquivo HTML principal
  |-- styles/
  |     |-- index.css       # Arquivo de estilos globais
```

## 🛠️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jhonatan-goncalves-pereira/capacita-brasil-modulo-intermediario.git
   cd capacita-brasil-modulo-intermediario
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   O projeto estará disponível em:
   ```
   http://localhost:5173
   ```

## 🌟 Considerações Finais

Este projeto foi desenvolvido como parte da capacitação em ReactJS para o programa Capacita Brasil / C-JOVEM. O objetivo é aprimorar habilidades no desenvolvimento web utilizando tecnologias modernas e princípios de responsividade.

Qualquer sugestão ou melhoria são bem-vindas!

## 🔗 API Utilizada
O projeto consome dados da [PokéAPI](https://pokeapi.co/) para obter informações sobre os Pokémons.

## 📜 Licença
Este projeto é de uso livre para fins educacionais e não possui fins lucrativos.

---

