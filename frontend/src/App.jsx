// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation  } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from "./App.module.css"; // Style from  main

// developing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AppContent() {
  const getNavLinkClass = ({ isActive }) => {
    const location = useLocation(); // Hook main location
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

      <main>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            {/* O location={location} é crucial para o Routes saber quando animar */}
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
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
