import React from 'react'

const ProjetDetailComponent = ({ title, description, imgPath }) => (
  <div class='project-container-detail'>
    <div class='image-container-projet'>
      <img class='img-projet' src={imgPath} alt='' />
    </div>
    <div class='projet-resumer'>
      <h3 class='grand-titre-mobile'>{title}</h3>
      <p>{description}</p>
      <a
        class='github-link'
        href='https://github.com/GabrielCodeProject/JourneeCarriere'
      >
        Lien github
      </a>
    </div>
  </div>
)

export default ProjetDetailComponent
