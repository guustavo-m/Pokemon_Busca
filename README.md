# 🎮 POKÉDEX PRO

Uma aplicação web React moderna que permite aos usuários pesquisar e descobrir informações sobre Pokémon, obtendo dados da PokéAPI. Este projeto demonstra a comunicação cliente-servidor por meio de requisições HTTP em um ambiente React.

## 📋 Sobre

POKÉDEX PRO é um aplicativo interativo da Pokédex desenvolvido com React e Vite. Ele demonstra como um aplicativo do lado do cliente pode se comunicar com um servidor de API RESTful para recuperar e exibir dados em tempo real. Os usuários podem pesquisar qualquer Pokémon pelo nome e visualizar informações detalhadas sobre ele.

**Conceito:** O cliente (navegador) solicita dados de um servidor por meio de requisições HTTP.

## 📦 Instalação

### Setup

1. **Clone o repositório:**
   ```bash
   git clone <repository-url>
   cd Comunica--o-Web-com-React
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## 🚀 Rodando o Projeto

### Modo Desenvolvedor

Inicie o servidor como desenvolvedor:

```bash
npm run dev
```

## 🔌 API Usada

Esse projeto usa a **PokéAPI** (https://pokeapi.co/)

**Endereço Usado:**
```
GET https://pokeapi.co/api/v2/pokemon/{pokemon-name}
```

## 🎯 Exemplo de Uso

1. Abra o aplicativo no seu navegador.
2. Digite o nome de um Pokémon em inglês (por exemplo, "pikachu", "blastoise", "dragonite").
3. Aguarde o carregamento dos dados.
4. Veja as informações do Pokémon exibidas na tela.
5. Procure outro Pokémon ou tente novamente.

## 📝 Notas

- Os nomes dos Pokémon devem ser inseridos em **INGLÊS**
- A busca não diferencia maiúsculas de minúsculas
- Requer uma conexão ativa com a internet para buscar dados da PokéAPI
- O aplicativo utiliza React Hooks (useState) para gerenciamento de estado
