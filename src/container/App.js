/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
function App () {
  return (
    <div className='App'>
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
                Je suis un Developpeur Full-Stack. J'ai complété mes études en
                Programmation et Technologie internet afin de me procurer les
                competance necessaire pour performer dans un domaine qui me
                passionne. Je suis quelqu'un de <strong>Passionné</strong>,{' '}
                <strong>Autodidacte</strong> et <strong>Polyvalent</strong>.
                <br /> Et voici mon <strong>Portfolio</strong>.
              </p>
              <a href='./GabrielCV2022.pdf' class='button small' download>
                download
              </a>
            </div>
          </div>
        </div>
      </article>

      <article id='work' class='wrapper style2'>
        <div class='container'>
          <header>
            <h2>Mes competances</h2>
          </header>
          <div class='row aln-center'>
            <div class='col-4 col-6-medium col-12-small'>
              <section class='box style1'>
                <span class='icon featured fa-comments' />
                <h3>Integration Web</h3>
                <p>
                  Integration HTML / CSS qui respect les standards du Web.
                  Design responsive et dynamique, compatible sur plusieurs
                  format tel que mobile, tablette et desktop.
                </p>
              </section>
            </div>

            <div class='col-4 col-6-medium col-12-small'>
              <section class='box style1'>
                <span class='icon solid featured fa-camera-retro' />
                <h3>Back-End</h3>
                <p>
                  Connection avec un API REST, Traitement de donner recu par une
                  base de donner <strong>[</strong> MySQL, PostgreSQL, MariaDB,
                  SQLLite <strong>]</strong> et un systeme d'authentification.
                </p>
              </section>
            </div>

            <div class='col-4 col-6-medium col-12-small'>
              <section class='box style1'>
                <span class='icon featured fa-thumbs-up' />
                <h3>Mobile</h3>
                <p>
                  Developpement d'application mobile avec Android Studio
                  utilisant Java. De plus, jetudie aussi le framework{' '}
                  <a href='lien vers flutter'>flutter </a>
                  qui utilise le langage dart que lon peut comparer a
                  javascript.
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
                <h3>Journee Carriere</h3>
                <p>
                  Site Web permetant de creer et de faire la gestion d'une
                  journee carriere. Il contient aussi une application mobile,
                  qui permet a des utilisateurs inscrits de ce connecter.
                  L'application permet de voir ton horaire, ta liste de meeting
                  avec les details de celle-ci et le profile de certain
                  utilisateur selon son type de connection
                  [Admin,Employeur,Employer,Etudiant].
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
                  Site Web static d'apparance E-Boutique sur le theme de la
                  vente de cours de musique et material de musique tel que
                  diverses Guitares. Utilisant uniquement{' '}
                  <strong>HTML/CSS</strong> avec un
                  <strong>Design Responsive</strong> sur plusieurs platformes{' '}
                  <strong>mobiles, tablettes et desktops</strong>.
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
                <h3>Memoire</h3>
                <p>
                  Jeux de Memoire Web qui a pour objectif de trouve chair pair
                  de carte. Le jeu contient un systeme de pointage et de
                  difficulter. Cette page utilise uniquement{' '}
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
                  Application Mobile, developper en Java avec Android Studio,
                  permetant de remplire un formulaire profil de l'athlete,
                  suivre ca progression physique, son entrainement du jour, et
                  de creer un plan aleatoire.
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
                  Jeu developper lors du Game Jam Montreal en janvier 2020 a
                  l'ETS sur la thematique "Repair". Utilisant Unity et C# lors
                  du developpement, nous avons concu en equipe de cinq,
                  StarGraze ! "Pris dans une chaine d'asteroid, tu devras
                  reparer ton vesseau qui ce fait heurter par les asteroids.
                  Grace a la toolbar d'outils, tu pourras reparer ton vaisseau
                  et survivre."
                </p>
                <a
                  href='https://gabrielcodeproject.itch.io/spacegaze?secret=N234BvIkw2xGpcHt897BwabrU'
                  class='button small scrolly'
                >
                  Essayer la demo
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
                <a href='https://github.com/gitname/react-gh-pages'>tutorial</a>
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
                        <input type='submit' value='Send Message' />
                      </li>
                      <li>
                        <input type='reset' value='Clear Form' class='alt' />
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

      <script src='../js/jquery.min.js' />
      <script src='../js/jquery.scrolly.min.js' />
      <script src='../js/browser.min.js' />
      <script src='../js/breakpoints.min.js' />
      <script src='../js/util.js' />
      <script src='../js/main.js' />
    </div>
  )
}

export default App
