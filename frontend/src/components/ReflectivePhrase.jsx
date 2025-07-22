// src/components/ReflectivePhrase.jsx

// 1. Importe as ferramentas necessárias
import React, { useState, useEffect, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './ReflectivePhrase.module.css';

const phrases = [
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A persistência realiza o impossível.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
];

function ReflectivePhrase() {
  const [index, setIndex] = useState(0);
  const nodeRef = useRef(null); // Ref para o elemento <p>

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.phraseContainer}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={index}
          nodeRef={nodeRef}
          timeout={1000}
          classNames={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
          unmountOnExit
        >
          <p ref={nodeRef} className={styles.phraseText}>
            {phrases[index]}
          </p>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default ReflectivePhrase;