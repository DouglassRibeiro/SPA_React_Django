// src/pages/Home.jsx
import React from "react";
import styles from "./Home.module.css"; // 1. Importe o arquivo de estilos
import profileImage from "../../assets/profile-photo.png";
import ReflectivePhrase  from '../../components/ReflectivePhrase';

function Home() {
  return (
    <><div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Como vai, eu sou o <strong className={styles.red}>Douglas</strong>
        </h1>
        <p className={styles.subtitle}>
          Sou um desenvolvedor sempre em busca de novas tecnologias.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt="Image - Douglas"
          className={styles.profileImage} />
      </div>
    </div><ReflectivePhrase /></>
  );
}

export default Home;
