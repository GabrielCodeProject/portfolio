/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import BioComponent from '../component/biographie-component'
function App () {
  return (
    <div class='master-container'>
      <div class='header-container'>
        <nav id='nav'>
          <img
            src='images/harrypotter/platformHarrypotter.png'
            alt=''
            srcset=''
          />
          <ul class='container'>
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
          <img src='images/harrypotter/Slytherin250x300.png' alt='' srcset='' />
        </nav>
      </div>
      <div class='bio-container background-color-dark-green-theme'>
        <img class='img-bio' src='images/profil.jpg' alt='' />
        <BioComponent />
        <div class='biographie-container'>
          <header class=''>
            <h1>
              Salut! Je suis <strong>Gabriel Lavigueur</strong>.
            </h1>
          </header>
          <p>
            Je suis un Développeur Full-Stack. J'ai complété mes études en
            Programmation et Technologie internet afin de me procurer les
            compétences nécessaires pour performer dans un domaine qui me
            fascine. Je suis quelqu'un de <strong>Passionné</strong>,{' '}
            <strong>Autodidacte</strong> et <strong>Polyvalent</strong>.
            <br /> Et voici mon <strong>Portfolio</strong>.
          </p>
          <a href='./GabrielCV2022.pdf' class='' download>
            Mon CV
          </a>
        </div>
      </div>
      <div class='competances-container background-color-dark-green-theme'>
        <header class='grand-titre'>
          <h2>Mes compétences</h2>
        </header>
        <div class='list-competance-container'>
          <div id='competance1-id' class='detail-competance '>
            <img
              class='img-competance'
              src='images/globe-180.png'
              alt=''
              srcset=''
            />
            <h3 class='h3-big' className='light'>
              Intégration Web
            </h3>
            <p class='p-big'>
              Intégration <strong>HTML / CSS</strong> qui respecte les{' '}
              <a href='lien vers les standards'>standards du Web</a>. Design{' '}
              <strong>responsive</strong> et <strong>dynamique</strong>,
              compatible sur plusieurs formats tels que{' '}
              <span>mobile, tablette et desktop.</span>
            </p>
          </div>

          <div id='competance2-id' class='detail-competance'>
            <img
              class='img-competance'
              src='images/development-128.png'
              alt=''
              srcset=''
            />
            <h3 class='h3-big' className='light'>
              Back-End
            </h3>
            <p class='p-big'>
              Connection avec un <strong>API REST</strong>, Traitement de
              données reçu par une base de données{' '}
              <span>"MySQL, PostgreSQL, MariaDB, SQLite"</span> et un système
              d'authentification.
            </p>
          </div>

          <div id='competance3-id' className='light' class='detail-competance'>
            <img
              class='img-competance'
              src='images/Mobile-Multiple-Devices-icon.png'
              alt=''
              srcset=''
            />
            <h3 class='h3-big'>Mobile</h3>
            <p class='p-big'>
              Développement d'application <strong>mobile</strong> avec{' '}
              <strong>Android Studio</strong>
              utilisant <strong>Java</strong>. De plus, j'apprends aussi le
              framework <a href='lien vers flutter'>flutter</a> qui utilise le
              langage dart que l'on peut comparer à{' '}
              <a href='lien vers javascript'>javascript</a>.
            </p>
          </div>
        </div>
        <footer>
          <a href='#portfolio' class='button large scrolly'>
            Voir mes projets.
          </a>
        </footer>
      </div>
      <div class='projets-master-container background-color-dark-green-theme'>
        <header class='grand-titre'>
          <h2>Mes projets</h2>
        </header>
        <div class='projets-list-container'>
          <div class='project-container-detail'>
            <img
              class='img-projet'
              src='images/journeecarriereshowcase.png'
              alt=''
            />
            <div class='projet-resumer'>
              <h3>Journée Carrière</h3>
              <p>
                <strong>Site Web</strong> permettant de créer et de faire la
                gestion d'une journée carrière. Il contient aussi une{' '}
                <strong>application mobile</strong> développée en{' '}
                <strong>Java</strong>, qui permet aux utilisateurs inscrits de
                se connecter. L'application permet de voir ton horaire, ta liste
                de meeting avec les détails de celle-ci et le profil de certain
                utilisateur selon son type de connexion.
              </p>
              <a
                class='github-link'
                href='https://github.com/GabrielCodeProject/JourneeCarriere'
              >
                Lien github
              </a>
            </div>
          </div>

          <div class='project-container-detail'>
            <img class='img-projet' src='images/musikshowcase.png' alt='' />
            <div class='projet-resumer'>
              <h3>Musik</h3>
              <p>
                <strong>Site Web</strong> static d'apparence
                <strong>E-Boutique</strong> sur le thème de la vente de cours de
                musique et materiel de musique tel que diverses Guitares.
                Utilisant uniquement <strong>HTML/CSS</strong> avec un{' '}
                <strong>Design Responsive</strong> sur plusieurs platformes{' '}
                <strong>mobiles, tablettes et desktops</strong>.
              </p>
              <a href='https://github.com/GabrielCodeProject/Musik'>
                Lien github
              </a>
            </div>
          </div>

          <div class='project-container-detail'>
            <img class='img-projet' src='images/memoireShowCaseX.png' alt='' />
            <div class='projet-resumer'>
              <h3>Mémoire</h3>
              <p>
                Jeux de Mémoire <strong>Web</strong> qui a pour objectif de
                trouver chaque pair de carte. Le jeu contient un système de
                pointage et de difficulté. Cette page utilise uniquement{' '}
                <strong>HTML/CSS</strong> et{' '}
                <a href='lien vers javascript'>Javascript</a>
              </p>
              <a href='https://github.com/GabrielCodeProject/Memoire'>
                Lien github
              </a>
            </div>
          </div>

          <div class='project-container-detail'>
            <img class='img-projet' src='images/gainztimeshowcase.png' alt='' />
            <div class='projet-resumer'>
              <h3>GainzTime</h3>
              <p>
                <strong>Application Mobile</strong>, développée en{' '}
                <strong>Java</strong> avec <strong>Android Studio</strong>,
                permettant de remplir un formulaire profil de l'athlète, suivre
                sa progression physique, son entraînement du jour, et de créer
                un plan aléatoire.
              </p>
              <a href='https://github.com/GabrielCodeProject/GainzTime'>
                Lien github
              </a>
            </div>
          </div>

          <div class='project-container-detail'>
            <img class='img-projet' src='images/stargrazeshowcase.png' alt='' />
            <div class='projet-resumer'>
              <h3>StarGraze</h3>
              <p>
                Jeu développé lors du{' '}
                <a href='lien si fonctionnel'>Game Jam Montréal</a> en janvier
                2020 à l'ÉTS sur la thématique “Repair”. Utilisant{' '}
                <strong>Unity</strong> et <strong>C#</strong> lors du
                développement, nous avons conçu en équipe de cinq, StarGraze !{' '}
                <span>
                  "Pris dans une chaîne d'asteroid, tu devras réparer ton
                  vaisseau qui se fait heurter par les asteroids. Grâce au
                  toolbar d'outils, tu pourras réparer ton vaisseau et
                  survivre."
                </span>
              </p>
              <a
                href='https://gabrielcodeproject.itch.io/spacegaze?secret=N234BvIkw2xGpcHt897BwabrU'
                class='button small scrolly'
              >
                Essayer la démo
              </a>
              <br />
              <a href='https://github.com/GabrielCodeProject/StarGraze'>
                Lien github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='contact-container'>
        <header>
          <h2>Contact</h2>
        </header>
      </div>
      <div class='footer-container'>
        <footer>
          <ul id='copyright'>
            <li>&copy; Untitled. All rights reserved.</li>
            <li>
              Design: <a href='http://html5up.net'>HTML5 UP</a>
            </li>
          </ul>
        </footer>
      </div>
      <script src='./js/mainTest.js' />
    </div>
  )
}

export default App
