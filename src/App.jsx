import { useState } from 'react';
import './App.css';
import pokebola from './assets/img/poke_bola.webp'

function App() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [pokemon, setPokemon] = useState('');

  const buscarDados = async () => {
    if (!pokemon) return;

    setLoading(true);
    setErro(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

      if (!response) {
        throw new Error('Pokémon não encontrado');
      }

      const resultado = await response.json();
      setDados(resultado);
    } catch (error) {
      setErro(error.message);
      setDados(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="titulo">
        <img src={`${pokebola}`} alt="" />
        <h1>POKÉDEX PRO</h1>
        <img src={`${pokebola}`} alt="" />
      </div>
      <div className="info">
        <strong>Conceito : </strong>Cliente (navegador) solicita dados de um Servidor através de requisições HTTP
      </div>

      <input
        type="text"
        placeholder="Digite o nome do Pokémon EM INGLÊÊÊÊS..."
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />

      <button onClick={buscarDados} disabled={loading}>
        {loading ? 'Carregando...' : 'Buscar Dados da API'}
      </button>

      <div className="resultado">
        {loading && <em>⌛ Carregando dados...</em>}

        {erro && (
          <>
            <h3>❌ Erro</h3>
            <p>{erro}</p>
          </>
        )}

        {dados && !loading && (
          <>
            <h3>✅ Dados recebidos :</h3>
            <div className="card">
              <div className="over">
                <img src={dados.sprites.front_default} alt={dados.name}/>
                <p><strong>Nome : </strong>{dados.name.charAt(0).toUpperCase() + dados.name.slice(1)}</p>
              </div>
              <div className="under">
                <p><strong>Altura : </strong>{dados.height * 10} cm</p>
                <p><strong>Peso : </strong>{dados.weight / 10} kg</p>
              </div>
            </div>
          </>
        )}

        {!dados && !loading && !erro && (
          <em>Clique no botão acima para buscar...</em>
        )}
      </div>
    </div>
  );
}

export default App;
