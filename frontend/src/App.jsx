// src/App.jsx - VERSÃO FINAL COM A CORREÇÃO nodeRef

import React, { useState, useRef } from "react";
import {
  //BrowserRouter as Router,
  //HashRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group"; // 2. Importe o SwitchTransition
import styles from "./App.module.css";

import homeIcon from "./assets/icons/home.svg";
import aboutIcon from "./assets/icons/about.svg";
import projectsIcon from "./assets/icons/projectes.svg";
import contactIcon from "./assets/icons/contact.svg";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsBackdropVisible(true);
    } else {
      setIsMenuOpen(false);
      setIsBackdropVisible(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  const nodeRef = useRef(null);

  return (
    <div
      className={`${styles.menuContent} ${
        isMenuOpen ? styles.menuVisible : ""
      }`}
    >
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        ☰
      </button>

      {isBackdropVisible && (
        <div
          className={`${styles.backdrop} ${!isMenuOpen ? styles.closing : ""}`}
          onAnimationEnd={() => {
            if (!isMenuOpen) setIsBackdropVisible(false);
          }}
        ></div>
      )}

      <nav className={styles.navContainer}>
        <ul className={styles.navList} onClick={closeMenu}>
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              <span className={styles.navItenContent}>
                <img src={homeIcon} alt="Ínicio" className={styles.navIcon} />
                Início
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              <span className={styles.navItenContent}>
                <img src={aboutIcon} alt="Sobre" className={styles.navIcon} />
                Sobre
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={getNavLinkClass}>
              <span className={styles.navItenContent}>
                <img src={projectsIcon} alt="Projetos" className={styles.navIcon} />
                Projetos
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>
              <span className={styles.navItenContent}>
                <img src={contactIcon} alt="Contato" className={styles.navIcon} />
                Contato
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className={styles.mainContainer}>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={500}
            classNames="page"
            unmountOnExit
          >
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
  return <AppContent />;
}

export default App;
