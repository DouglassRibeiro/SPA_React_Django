// src/pages/Home.jsx
import React from "react";
import styles from "./Home.module.css"; // 1. Importe o arquivo de estilos
import profileImage from "../../assets/profile-photo.png";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textContainer}></div>
        <h1 className={styles.title}>
          Como vai, eu sou o <strong className={styles.red}>Douglas</strong>
        </h1>
        <p className={styles.subtitle}>
          Sou um desenvolvedor apaixonado por novas tecnologias.
        </p>
        <p className={styles.subtitle}>
          Curto explorar bibliotecas e lingagens de
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt="Douglas - Developer"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
}

export default Home;
