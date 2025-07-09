// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css"; // 1. Importe o seu novo arquivo de estilos

// Importe as páginas que você criou
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className={styles.menuClass}>
        <nav className={styles.navContainer}>
          {/* 3. E também à lista <ul> */}
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/projects" className={styles.navLink}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>
                Contato
              </Link>
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
