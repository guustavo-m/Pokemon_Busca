import { useState } from 'react';
import './index.css';
import python from './assets/img/python.png'
import js from './assets/img/js.png'
import java from './assets/img/java.png'
import cpp from './assets/img/cpp.png'
import fortran from './assets/img/fortran.png'

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
        <button className="menu" onClick={() => setMenuAberto(!menuAberto)}>{menuAberto ? '☰ Fechar' : '☰ Menu'}</button>
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
            <h1 className="title">GeekHub</h1>
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
                    <h3>Curiosidades da Tecnologia</h3>
                    <ul>
                      <li>1️⃣ JavaScript foi criado em apenas 10 dias</li>
                      <li>2️⃣ O nome quase não foi JavaScript</li>
                      <li>3️⃣ JavaScript não é a mesma coisa que Java</li>
                      <li>4️⃣ Quase todos os sites usam JavaScript</li>
                      <li>5️⃣ Também é possível usar JavaScript fora do navegador</li>
                    </ul>
                  </div>
                )}
                {abaAtual === 'prog' && (
                  <div className="fade-in">
                    <h3>Algumas Linguagens</h3>
                    <img src={python} alt="Python" />
                    <img src={js} alt="JavaScript" />
                    <img src={java} alt="Java" />
                    <img src={cpp} alt="C++" />
                    <img src={fortran} alt="Fortran" />
                  </div>
                )}
              </div>
            </section>

            <section className="help-section">
              <h2>Fome de Méqui? 🤔</h2>
              <AccordionItem 
                pergunta="O que é React?" 
                resposta="React é uma biblioteca JavaScript usada para criar interfaces de usuário, principalmente em aplicações web. Ela facilita a construção de telas usando componentes reutilizáveis." 
              />
              <AccordionItem 
                pergunta="Para que serve o useState?" 
                resposta="O useState é um Hook do React usado para criar e controlar estados (dados que podem mudar) dentro de um componente." 
              />
              <AccordionItem 
                pergunta="O que são eventos em interfaces?" 
                resposta="Eventos são ações do usuário na interface, como cliques, digitação, movimento do mouse ou envio de formulários, que o programa pode detectar e responder." 
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;