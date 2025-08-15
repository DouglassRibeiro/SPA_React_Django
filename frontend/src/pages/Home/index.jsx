// src/pages/Home.jsx
import React from "react";
import styles from "./Home.module.css"; // 1. Importe o arquivo de estilos
import profileImage from "../../assets/profile-photo.svg";
import ReflectivePhrase from "../../components/ReflectivePhrase";
import homeIcon from "../../assets/icons/home.svg";
import * as techIconsList from "../../assets/tech-icons/";


const techIcons = [
  { id: "3dBox", src: techIconsList.icon3dBox, alt: "3dBox" },
  {
    id: "icon3dRotation",
    src: techIconsList.icon3dRotation,
    alt: "icon3dRotation",
  },
  { id: "iconAngular", src: techIconsList.iconAngular, alt: "iconAngular" },
  {
    id: "iconAzureSqlDataBase",
    src: techIconsList.iconAzureSqlDataBase,
    alt: "iconAzureSqlDataBase",
  },
  {
    id: "iconBlenderIcon",
    src: techIconsList.iconBlenderIcon,
    alt: "iconBlenderIcon",
  },
  {
    id: "iconCMoreMoreTraced",
    src: techIconsList.iconCMoreMoreTraced,
    alt: "iconCMoreMoreTraced",
  },
  { id: "iconDjango", src: techIconsList.iconDjango, alt: "iconDjango" },
  { id: "iconGit", src: techIconsList.iconGit, alt: "iconGit" },
  { id: "iconGolang", src: techIconsList.iconGolang, alt: "iconGolang" },
  { id: "iconHtml", src: techIconsList.iconHtml, alt: "iconHtml" },
  { id: "iconCss", src: techIconsList.iconCss, alt: "iconCss" },
  {
    id: "iconHtmlStart",
    src: techIconsList.iconHtmlStart,
    alt: "iconHtmlStart",
  },
  {
    id: "iconHtmliconHtmlEnd",
    src: techIconsList.iconHtmliconHtmlEnd,
    alt: "iconHtmliconHtmlEnd",
  },
  { id: "iconJava", src: techIconsList.iconJava, alt: "iconJava" },
  {
    id: "iconJavaScript",
    src: techIconsList.iconJavaScript,
    alt: "iconJavaScript",
  },
  { id: "iconNode", src: techIconsList.iconNode, alt: "iconNode" },
  { id: "iconPython", src: techIconsList.iconPython, alt: "iconPython" },
  { id: "iconReact", src: techIconsList.iconReact, alt: "iconPython" },
  { id: "iconTailwind", src: techIconsList.iconTailwind, alt: "iconTailwind" },
  { id: "iconVue", src: techIconsList.iconVue, alt: "iconVue" },
];

function shuffleArray(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Home() {
  const shuffledIcons1 = React.useMemo(() => shuffleArray(techIcons), []);
  const shuffledIcons2 = React.useMemo(() => shuffleArray(techIcons), []);
  return (
    <>
      <title>Douglas | Inicio</title>
      <link rel="icon" type="image/svg+xml" href={homeIcon} />
      <div className={styles.homeContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Como vai, eu sou o <strong className={styles.red}>Douglas</strong>
          </h1>
          <p className={styles.subtitle}>
            Sou um desenvolvedor sempre em busca de novas tecnologias.
          </p>
          <div className={styles.iconMarquee}>
            <div className={styles.marqueeRow}>
              {shuffledIcons1.map((icon) => (
                <a href="#" key={`${icon.id}-1`} className={styles.iconLink}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={styles.techIcon}
                  />
                </a>
              ))}
              {shuffledIcons1.map((icon)=> (
                <a href="#" key={`${icon.id}-1`} className={styles.iconLink}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={styles.techIcon}
                  />
                </a>
              ))}
            </div>
            <div className={`${styles.marqueeRow} ${styles.reverse}`}>
              {shuffledIcons2.map((icon) => (
                <a href="#" ky={`${icon.id}-2`} className={styles.iconLink}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={styles.techIcon}
                  />
                </a>
              ))}
              {shuffledIcons2.map((icon) => (
                <a href="#" key={`${icon.id}-2`} className={styles.iconLink}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={styles.techIcon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={profileImage}
            alt="Image - Douglas"
            className={styles.profileImage}
          />
        </div>
      </div>
      <div>
        <ReflectivePhrase />
      </div>
    </>
  );
}

export default Home;
