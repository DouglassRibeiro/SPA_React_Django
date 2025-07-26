import React from 'react';
import styles from './Contact.module.css';
import contactIcon from '../../assets/icons/contact.svg';

function Contact() {
  return (
    <>
    <title>Douglas | Contato</title>
    <link rel="shortcut icon" href={contactIcon} type="image/x-icon" />
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>
      <p className={styles.subtitle}>Entre em contato comigo através do formulário abaixo.</p>
      {/* Aqui entrará o formulário de contato */}
    </div>
    </>
  );
}

export default Contact;