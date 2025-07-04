import React from 'react';

function About() {
  return (
    <div>
      <h1>Sobre Mim</h1>
      {/* No futuro, os dados aqui virão da sua API Django /api/about/ */}
      <p>Aqui vai a descrição sobre minha carreira, habilidades e experiências.</p>
    </div>
  );
}

export default About;