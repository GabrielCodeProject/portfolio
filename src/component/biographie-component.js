import React from 'react'

const BioComponent = ({ text, photo }) => (
  <div class='biographie-container'>
    <header>
      <h1>
        Salut! Je suis <strong>Gabriel Lavigueur</strong>.
      </h1>
    </header>
    <p>
      Je suis un Développeur Full-Stack. J'ai complété mes études en
      Programmation et Technologie internet afin de me procurer les compétences
      nécessaires pour performer dans un domaine qui me fascine. Je suis
      quelqu'un de <strong>Passionné</strong>, <strong>Autodidacte</strong> et{' '}
      <strong>Polyvalent</strong>.
      <br /> Et voici mon <strong>Portfolio</strong>.
    </p>
    <a href='./GabrielCV2022.pdf' download>
      Mon CV
    </a>
  </div>
)

export default BioComponent
