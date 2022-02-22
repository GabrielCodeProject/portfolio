/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
function App () {
  return (
    <div className='App' class='full-view-con'>
      <div class='master-container'>
        <nav id='nav'>
          <ul class='container'>
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
            <li>
              <a href='../test.html'>New Page</a>
            </li>
          </ul>
        </nav>

        <article id='top' class='wrapper style1'>
          <div class='container'>
            <div class='row'>
              <div class='col-4 col-5-large col-12-medium'>
                <span class='image fit'>
                  <img src='images/gab.jpg' alt='' />
                </span>
              </div>
              <div class='col-8 col-7-large col-12-medium'>
                <header>
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
                <a href='./GabrielCV2022.pdf' class='button small' download>
                  Mon CV
                </a>
              </div>
            </div>
          </div>
        </article>

        <article id='work' class='wrapper style2'>
          <div class='container'>
            <header>
              <h2>Mes compétences</h2>
            </header>
            <div class='row aln-center'>
              <div class='col-4 col-6-medium col-12-small'>
                <section class='box style1'>
                  <span class='icon featured fa-comments' />
                  <h3>Intégration Web</h3>
                  <p>
                    Intégration <strong>HTML / CSS</strong> qui respecte les{' '}
                    <a href='lien vers les standards'>standards du Web</a>.
                    Design <strong>responsive</strong> et{' '}
                    <strong>dynamique</strong>, compatible sur plusieurs formats
                    tels que <span>mobile, tablette et desktop.</span>
                  </p>
                </section>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <section class='box style1'>
                  <span class='icon solid featured fa-camera-retro' />
                  <h3>Back-End</h3>
                  <p>
                    Connection avec un <strong>API REST</strong>, Traitement de
                    données reçu par une base de données{' '}
                    <span>"MySQL, PostgreSQL, MariaDB, SQLite"</span> et un
                    système d'authentification.
                  </p>
                </section>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <section class='box style1'>
                  <span class='icon featured fa-thumbs-up' />
                  <h3>Mobile</h3>
                  <p>
                    Développement d'application <strong>mobile</strong> avec{' '}
                    <strong>Android Studio</strong>
                    utilisant <strong>Java</strong>. De plus, j'apprends aussi
                    le framework <a href='lien vers flutter'>flutter</a> qui
                    utilise le langage dart que l'on peut comparer à{' '}
                    <a href='lien vers javascript'>javascript</a>.
                  </p>
                </section>
              </div>
            </div>

            <footer>
              <a href='#portfolio' class='button large scrolly'>
                Voir mes projets.
              </a>
            </footer>
          </div>
        </article>

        <article id='portfolio' class='wrapper style3'>
          <div class='container'>
            <header>
              <h2>Mes projets</h2>
            </header>
            <div class='row'>
              <div class='col-4 col-6-medium col-12-small'>
                <article class='box style2'>
                  <a href='#' class='image featured'>
                    <img src='images/gab.jpg' alt='' />
                  </a>
                  <h3>Journée Carrière</h3>
                  <p>
                    <strong>Site Web</strong> permettant de créer et de faire la
                    gestion d'une journée carrière. Il contient aussi une{' '}
                    <strong>application mobile</strong> développée en{' '}
                    <strong>Java</strong>, qui permet aux utilisateurs inscrits
                    de se connecter. L'application permet de voir ton horaire,
                    ta liste de meeting avec les détails de celle-ci et le
                    profil de certain utilisateur selon son type de connexion.
                  </p>
                  <a href='https://github.com/GabrielCodeProject/JourneeCarriere'>
                    Lien github
                  </a>
                </article>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <article class='box style2'>
                  <a href='#' class='image featured'>
                    <img src='images/gab.jpg' alt='' />
                  </a>
                  <h3>Musik</h3>
                  <p>
                    <strong>Site Web</strong> static d'apparence{' '}
                    <strong>E-Boutique</strong> sur le thème de la vente de
                    cours de musique et materiel de musique tel que diverses
                    Guitares. Utilisant uniquement <strong>HTML/CSS</strong>{' '}
                    avec un <strong>Design Responsive</strong> sur plusieurs
                    platformes <strong>mobiles, tablettes et desktops</strong>.
                  </p>
                  <a href='https://github.com/GabrielCodeProject/Musik'>
                    Lien github
                  </a>
                </article>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <article class='box style2'>
                  <a href='#' class='image featured'>
                    <img src='images/gab.jpg' alt='' />
                  </a>
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
                </article>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <article class='box style2'>
                  <a href='#' class='image featured'>
                    <img src='images/gab.jpg' alt='' />
                  </a>
                  <h3>GainzTime</h3>
                  <p>
                    <strong>Application Mobile</strong>, développée en{' '}
                    <strong>Java</strong> avec <strong>Android Studio</strong>,
                    permettant de remplir un formulaire profil de l'athlète,
                    suivre sa progression physique, son entraînement du jour, et
                    de créer un plan aléatoire.
                  </p>
                  <a href='https://github.com/GabrielCodeProject/GainzTime'>
                    Lien github
                  </a>
                </article>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <article class='box style2'>
                  <a href='#' class='image featured'>
                    <img src='images/gab.jpg' alt='' />
                  </a>
                  <h3>StarGraze</h3>
                  <p>
                    Jeu développé lors du{' '}
                    <a href='lien si fonctionnel'>Game Jam Montréal</a> en
                    janvier 2020 à l'ÉTS sur la thématique “Repair”. Utilisant{' '}
                    <strong>Unity</strong> et <strong>C#</strong> lors du
                    développement, nous avons conçu en équipe de cinq, StarGraze
                    !{' '}
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
                  <br></br>
                  <a href='https://github.com/GabrielCodeProject/StarGraze'>
                    Lien github
                  </a>
                </article>
              </div>

              <div class='col-4 col-6-medium col-12-small'>
                <article class='box style2'>
                  <a href='#' class='image featured'>
                    <img src='images/gab.jpg' alt='' />
                  </a>
                  <h3>Portfolio</h3>
                  <div class='chart'>
                    <span>SkillBar Template</span>
                    <footer>
                      <div
                        width='95%'
                        //style='width: 95%;'
                      ></div>
                    </footer>
                  </div>
                  <div class='chart'>
                    <span>SkillBar Template</span>
                    <footer>
                      <div
                        width='95%'
                        //style='background: rgb(210, 108, 213); width: 95%;'
                      ></div>
                    </footer>
                  </div>
                  <a href='https://github.com/gitname/react-gh-pages'>
                    tutorial
                  </a>
                </article>
              </div>
            </div>

            <footer>
              <a href='#contact' class='button large scrolly'>
                Contact moi
              </a>
            </footer>
          </div>
        </article>

        <article id='contact' class='wrapper style4'>
          <div class='container medium'>
            <header>
              <h2>Contact</h2>
            </header>
            <div class='row'>
              <div class='col-12'>
                <form method='post' action='#'>
                  <div class='row'>
                    <div class='col-6 col-12-small'>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                      />
                    </div>
                    <div class='col-6 col-12-small'>
                      <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                      />
                    </div>
                    <div class='col-12'>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                      />
                    </div>
                    <div class='col-12'>
                      <textarea
                        name='message'
                        id='message'
                        placeholder='Message'
                      />
                    </div>
                    <div class='col-12'>
                      <ul class='actions'>
                        <li>
                          <input type='submit' value='Envoyer' />
                        </li>
                        <li>
                          <input type='reset' value='Clear' class='alt' />
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div class='col-12'>
                <hr />
                <h3>Trouve moi sur...</h3>
                <ul class='social'>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/gabriel-lavigueur-a13aa4150'
                      class='icon brands fa-linkedin-in'
                    >
                      <span class='label'>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://github.com/GabrielCodeProject'
                      class='icon brands fa-github'
                    >
                      <span class='label'>Github</span>
                    </a>
                  </li>
                  <li>
                    <i class='icon brands fa-solid fa-floppy-disk'></i>
                    <a href='./GabrielCV2022.pdf' class='icon fa-floppy-disk'>
                      <span class='label'>CV</span>
                    </a>
                  </li>
                  <li>
                    <i class='icon brands fa-solid fa-mailbox'></i>
                    <a
                      href='Gabrielprivermsg@gmail.com'
                      class='icon fa-mailbox'
                    >
                      <span class='label'>Mail</span>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <footer>
              <ul id='copyright'>
                <li>&copy; Untitled. All rights reserved.</li>
                <li>
                  Design: <a href='http://html5up.net'>HTML5 UP</a>
                </li>
              </ul>
            </footer>
          </div>
        </article>
        <script
          src='https://kit.fontawesome.com/36e7a159bf.js'
          crossorigin='anonymous'
        ></script>
        <script src='../js/jquery.min.js' />
        <script src='../js/jquery.scrolly.min.js' />
        <script src='../js/browser.min.js' />
        <script src='../js/breakpoints.min.js' />
        <script src='../js/util.js' />
        <script src='../js/main.js' />
      </div>
    </div>
  )
}

export default App
