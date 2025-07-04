// src/pages/Home.jsx
import React from 'react';
import styles from './Home.module.css'; // 1. Importe o arquivo de estilos

function Home() {
  // 2. Use os nomes das classes que você criou como propriedades do objeto 'styles'
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página Inicial</h1>
      <p className={styles.subtitle}>Bem-vindo ao meu portfólio pessoal. Sou um desenvolvedor apaixonado por tecnologia.</p>
    </div>
  );
}

export default Home;