import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre Mim</h1>
      {/* No futuro, os dados aqui virão da sua API Django /api/about/ */}
      <p className={styles.subtitle}>Aqui vai a descrição sobre minha carreira, habilidades e experiências.</p>
    </div>
  );
}

export default About;