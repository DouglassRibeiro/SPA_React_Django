// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css"; // 1. Importe o seu novo arquivo de estilos

// Importe as páginas que você criou
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };
  return (
    <Router>
      <div className={styles.menuContent}>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={getNavLinkClass}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getNavLinkClass}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={getNavLinkClass}>
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
