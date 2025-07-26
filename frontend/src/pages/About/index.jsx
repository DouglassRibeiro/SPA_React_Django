import React from "react";
import styles from "./About.module.css";

import aboutIcon from '../../assets/icons/about.svg'

function About() {
  return (
    <>
      <title>Sobre | Douglas</title>
      <link rel="shortcut icon" href={aboutIcon} type="image/x-icon" />
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre Mim</h1>
        {/* No futuro, os dados aqui virão da sua API Django /api/about/ */}
        <p className={styles.subtitle}>
          Aqui vai a descrição sobre minha carreira, habilidades e experiências.
        </p>
      </div>
    </>
  );
}

export default About;
