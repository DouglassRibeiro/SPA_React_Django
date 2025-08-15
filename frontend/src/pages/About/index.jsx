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
          Graduado em Tecnologias da Informação e Comunicação pela Universidade Federal de Santa Catarina, participou do Laboratório de Tecnologias Computacionais de Araranguá, trabalhando com modelagem e texturização 3D, utilizando principalmente Blender e outras ferramentas de programação, além de colaborar em outros projetos.Explora frameworks com foco na web, especialmente Django, além de linguagens como JavaScript e Python, além de estudos sobre Inteligência Artificial Generativa.
        </p>
      </div>
    </>
  );
}

export default About;
