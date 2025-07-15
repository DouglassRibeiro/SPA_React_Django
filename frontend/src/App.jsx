// src/App.jsx - VERSÃO FINAL COM A CORREÇÃO nodeRef

import React, { useRef } from "react"; // 1. Importe o 'useRef'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from 'react-transition-group'; // 2. Importe o SwitchTransition
import styles from "./App.module.css";

// Suas páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  // 3. Criamos uma referência para o nó (o div) que será animado
  const nodeRef = useRef(null);

  return (
    <div className={styles.menuContent}>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li><NavLink to="/" className={getNavLinkClass}>Início</NavLink></li>
          <li><NavLink to="/about" className={getNavLinkClass}>Sobre</NavLink></li>
          <li><NavLink to="/projects" className={getNavLinkClass}>Projetos</NavLink></li>
          <li><NavLink to="/contact" className={getNavLinkClass}>Contato</NavLink></li>
        </ul>
      </nav>

      <main className={styles.mainContainer}>
        {/* 4. Usamos SwitchTransition para garantir trocas limpas */}
        <SwitchTransition>
          <CSSTransition
            key={location.pathname} // Usar pathname é mais estável aqui
            nodeRef={nodeRef} // 5. Passamos a referência aqui
            timeout={500}
            classNames="page"
            unmountOnExit
          >
            {/* 6. Adicionamos a ref ao div que envolve as rotas */}
            <div ref={nodeRef} className="page-container">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;