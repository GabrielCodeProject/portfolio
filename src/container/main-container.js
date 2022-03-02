import React, { Component } from 'react'
import '../css/style.css'
import BioComponent from '../component/biographie-component'
import CompetanceComponent from '../component/competance-component'
import ProjetDetailComponent from '../component/projet-detail-component'
import ImageCustomSize from '../component/img-component'
import ImageCustomSizeComponent from '../component/img-component'

class MainContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nom: 'Lavigueur',
      prenom: 'Gabriel'
    }
  }

  render () {
    return (
      <div class='master-container'>
        <div class='header-container'>
          <nav id='nav'>
            <img src='images/harrypotter/platformHarrypotter.png' alt='' />
            <ul>
              <li />
              <li>
                <a href='#top'>Top</a>
              </li>
              <li>
                <a href='#work'>Work</a>
              </li>
              <li>
                <a href='#portfolio'>Portfolio</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
            <ImageCustomSizeComponent
              xWidht={'75px'}
              yHeight={'75px'}
              imgPath={'images/harrypotter/Slytherin250x300.png'}
              imgAlt={'ToggleImgDarkMode'}
              styleClass={'small-img'}
            />
          </nav>
        </div>
        <div class='bio-container background-color-dark-green-theme'>
          <div class='image-container'>
            <img class='img-bio' src='images/profil.jpg' alt='' />
          </div>
          <BioComponent />
        </div>
        <div class='competances-container background-color-dark-green-theme'>
          <header>
            <h2 class='grand-titre'>Mes compétences</h2>
          </header>
          <div class='list-competance-container'>
            <CompetanceComponent
              imgPath={'images/globe-180.png'}
              title={'Integration Web'}
              description={
                'Intégration HTML / CSS qui respecte les standards du Web. Design responsive et dynamique, compatible sur plusieurs formats tels que mobile, tablette et desktop.'
              }
            />

            <CompetanceComponent
              imgPath={'images/development-128.png'}
              title='Back-End'
              description={
                'Connection avec un API REST, Traitement de données reçu par une base de données "MySQL, PostgreSQL, MariaDB, SQLite" et un système d\'authentification.'
              }
            />

            <CompetanceComponent
              imgPath={'images/Mobile-Multiple-Devices-icon.png'}
              title='Mobile'
              description={
                "Développement d'application mobile avec Android Studioutilisant Java. De plus, j'apprends aussi le framework flutter qui utilise le langage dart que l'on peut comparer à javascript."
              }
            />
          </div>
          <footer>
            <a href='#portfolio'>Voir mes projets.</a>
          </footer>
        </div>
        <div class='projets-master-container background-color-dark-green-theme'>
          <header>
            <h2 class='grand-titre'>Mes projets</h2>
          </header>
          <div class='projets-list-container'>
            <ProjetDetailComponent
              title={'Journée Carrière'}
              description={
                "Site Web permettant de créer et de faire la gestion d'une journée carrière. Il contient aussi une application mobile développée en Java, qui permet aux utilisateurs inscrits de se connecter. L'application permet de voir ton horaire, ta liste de meeting avec les détails de celle-ci et le profil de certain utilisateur selon son type de connexion."
              }
              imgPath={'images/journeecarriereshowcase.png'}
            />

            <ProjetDetailComponent
              title={'Musik'}
              description={
                "Site Web static d'apparenceE-Boutique sur le thème de la vente de cours de musique et materiel de musique tel que diverses Guitares. Utilisant uniquement HTML/CSS avec un Design Responsive sur plusieurs platformes mobiles, tablettes et desktops."
              }
              imgPath={'images/musikshowcase.png'}
            />

            <ProjetDetailComponent
              title={'Mémoire'}
              description={
                'Jeux de Mémoire Web qui a pour objectif de trouver chaque pair de carte. Le jeu contient un système de pointage et de difficulté. Cette page utilise uniquement HTML/CSS et Javascript'
              }
              imgPath={'images/memoireShowCaseX.png'}
            />
            <ProjetDetailComponent
              title={'GainzTime'}
              description={
                "Application Mobile, développée en Java avec Android Studio, permettant de remplir un formulaire profil de l'athlète, suivre sa progression physique, son entraînement du jour, et de créer un plan aléatoire."
              }
              imgPath={'images/gainztimeshowcase.png'}
            />
            <ProjetDetailComponent
              title={'StarGraze'}
              description={
                "Jeu développé lors du Game Jam Montréal en janvier 2020 à l'ÉTS sur la thématique “Repair”. Utilisant Unity et C# lors du développement, nous avons conçu en équipe de cinq, StarGraze ! \"Pris dans une chaîne d'asteroid, tu devras réparer ton vaisseau qui se fait heurter par les asteroids. Grâce au toolbar d'outils, tu pourras réparer ton vaisseau et survivre.\""
              }
              imgPath={'images/stargrazeshowcase.png'}
            />
          </div>
        </div>
        <div class='footer-container'>
          <footer>
            <ul>
              <li>
                <a href='www.linkedin.com/in/gabriel-lavigueur-a13aa4150'>
                  Linkedin
                </a>
              </li>
              <li>
                <a href='https://github.com/GabrielCodeProject'>Github</a>
              </li>
              <li>
                <a href='Gabrielprivermsg@gmail.com'>Mail</a>
              </li>
            </ul>
          </footer>
          <span>
            <ul>
              <li>&copy; Untitled. All rights reserved.</li>
              <li>
                Design: <a href='http://html5up.net'>HTML5 UP</a>
              </li>
            </ul>
          </span>
        </div>
        <script src='./js/mainTest.js' />
      </div>
    )
  }
}

export default MainContainer
