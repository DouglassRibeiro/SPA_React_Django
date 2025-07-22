import React, { useState, useEffect } from 'react';
import styles from './ReflectivePhrase.module.css';

const phrases = [
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A persistência realiza o impossível.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos."
];

function ReflectivePhrase() {
  const [index, setIndex] = useState(0);

  // useEffect com setInterval para trocar a frase
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Usa o 'callback form' do setState para garantir o valor mais recente do index
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5000); // Muda a cada 5 segundos (5000 ms)

    // Função de limpeza para remover o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  return (
    <div className={styles.phraseContainer}>
      <p className={styles.phraseText}>{phrases[index]}</p>
    </div>
  );
}

export default ReflectivePhrase;