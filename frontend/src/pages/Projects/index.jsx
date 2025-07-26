import React from 'react';
import styles from './Projects.module.css'

import projectsIcon from '../../assets/icons/projectes.svg'

function Projects() {
  return (
    <>
    <title>Douglas | Projetos</title>
    <link rel="shortcut icon" href={projectsIcon} type="image/x-icon" />
    <div className={styles.container}>
      <h1 className={styles.title}>Meus Projetos</h1>
      {/* No futuro, vamos fazer uma chamada à API /api/projects/ para listar os projetos aqui */}
      <p className={styles.subtitle}>Aqui ficará a lista de projetos incríveis que desenvolvi.</p>
    </div>
    </>
  );
}

export default Projects;