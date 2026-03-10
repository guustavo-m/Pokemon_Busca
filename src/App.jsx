import { useState } from 'react';
import './index.css';

function AccordionItem({ pergunta, resposta }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className={`accordion-item ${expandido ? 'expanded' : ''}`}>
      <div 
        className="accordion-header" 
        onClick={() => setExpandido(!expandido)}
      >
        <h3>{pergunta}</h3>
        <span className="icon">
          ▼
        </span>
      </div>
      {expandido && (
        <div className="accordion-content slide-down">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [abaAtual, setAbaAtual] = useState('princ');

  return (
    <div className="container">
      <header className="header">
        <button className="menu" onClick={() => setMenuAberto(!menuAberto)}>{menuAberto ? 'Fechar' : 'Menu Aberto'}</button>
      </header>

      <div className="layout-body">{menuAberto && (<aside className="sidebar">
            <nav className="menu-nav">
              <a href="#inicio">Início</a>
              <a href="#jogos">Jogos</a>
              <a href="#programacao">Programação</a>
              <a href="#contato">Contato</a>
            </nav>
          </aside>
        )}
        <main className={`main ${menuAberto ? 'open' : ''}`}>
          <div className="card">
            <h1 className="title">Gamepedia</h1>
            <section className="tabs-section">
              <div className="tabs-header">
                <button className={`tab-button ${abaAtual === 'princ' ? 'active' : ''}`} onClick={() => setAbaAtual('princ')}>Games</button>
                <button className={`tab-button ${abaAtual === 'tec' ? 'active' : ''}`} onClick={() => setAbaAtual('tec')}>Tecnologia</button>
                <button className={`tab-button ${abaAtual === 'prog' ? 'active' : ''}`} onClick={() => setAbaAtual('prog')}>Programação</button>
              </div>
              <div className="tab-content">
                {abaAtual === 'princ' && (
                  <div className="fade-in">
                    <h3>Meus jogos Favoritos</h3>
                    <ul>
                      <li><a href="game 1">Minecraft</a></li>
                      <li><a href="game 2">Battlefield V</a></li>
                      <li><a href="game 3">Fortnite</a></li>
                      <li><a href="game 4">Forza</a></li>
                      <li><a href="game 5">Overwatch</a></li>
                    </ul>
                  </div>
                )}
                {abaAtual === 'tec' && (
                  <div className="fade-in">
                    <h3>🏷️ Promoções do Dia</h3>
                    <p>Pegue seu cupom exclusivo no app e apresente aqui no totem. 2 McOfertas pelo preço de 1!</p>
                  </div>
                )}
                {abaAtual === 'prog' && (
                  <div className="fade-in">
                    <h3>👑 Clube Méqui VIP</h3>
                    <p>Acumule pontos em todos os seus pedidos e troque por batatas fritas, refrigerantes e sorvetes de graça.</p>
                  </div>
                )}
              </div>
            </section>

            {/* 3. Seção de ajuda com 1 accordion */}
            <section className="help-section">
              <h2>Fome de Méqui? 🤔</h2>
              <AccordionItem 
                pergunta="Como uso o Totem de Autoatendimento?" 
                resposta="Basta abrir o Méqui Menu ali em cima, escolher seus produtos nas abas, finalizar seu pedido e retirar ali balcão quando seu número for chamado na tela!" 
              />
            </section>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;