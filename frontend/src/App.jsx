// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from "./App.module.css";

// Suas páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Array com as configurações das rotas para facilitar o mapeamento
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/contact', name: 'Contact', Component: Contact }
];

function AppContent() {
  const location = useLocation();

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

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

      {/* Container principal para as páginas */}
      <div className={styles.pageContainer}>
        <TransitionGroup>
          {/* A cada mudança de rota, uma nova CSSTransition será renderizada */}
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="page"
            unmountOnExit // Importante: remove o componente do DOM após a saída
          >
            {/* O 'div' abaixo será o elemento que receberá as classes de animação */}
            <div className="page">
              <Routes location={location}>
                {routes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
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