/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/App.css'
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
                  Hi. I'm <strong>Gabriel Lavigueur</strong>.
                </h1>
              </header>
              <p>
                And this is my <strong>Portfolio</strong>.
              </p>
              <a href='#work' class='button large scrolly'>
                Learn about what I do
              </a>
            </div>
          </div>
        </div>
      </article>

      <article id='work' class='wrapper style2'>
        <div class='container'>
          <header>
            <h2>Here's all the stuff I do.</h2>
          </header>
          <div class='row aln-center'>
            <div class='col-4 col-6-medium col-12-small'>
              <section class='box style1'>
                <span class='icon featured fa-comments' />
                <h3>Integrateur Web</h3>
                <p>
                  Ornare nulla proin odio consequat sapien vestibulum ipsum
                  primis sed amet consequat lorem dolore.
                </p>
              </section>
            </div>

            <div class='col-4 col-6-medium col-12-small'>
              <section class='box style1'>
                <span class='icon solid featured fa-camera-retro' />
                <h3>Developpeur Full Stack</h3>
                <p>
                  Ornare nulla proin odio consequat sapien vestibulum ipsum
                  primis sed amet consequat lorem dolore.
                </p>
              </section>
            </div>

            <div class='col-4 col-6-medium col-12-small'>
              <section class='box style1'>
                <span class='icon featured fa-thumbs-up' />
                <h3>Developpeur Mobile</h3>
                <p>
                  Ornare nulla proin odio consequat sapien vestibulum ipsum
                  primis sed amet consequat lorem dolore.
                </p>
              </section>
            </div>
          </div>

          <footer>
            <a href='#portfolio' class='button large scrolly'>
              See some of my recent work
            </a>
          </footer>
        </div>
      </article>

      <article id='portfolio' class='wrapper style3'>
        <div class='container'>
          <header>
            <h2>Here’s some stuff I made recently.</h2>
          </header>
          <div class='row'>
            <div class='col-4 col-6-medium col-12-small'>
              <article class='box style2'>
                <a href='#' class='image featured'>
                  <img src='images/gab.jpg' alt='' />
                </a>
                <h3>Journee Carriere</h3>
                <p>Ornare nulla proin odio consequat.</p>
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
                <p>Ornare nulla proin odio consequat.</p>
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
                <p>Ornare nulla proin odio consequat.</p>
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
                <p>Ornare nulla proin odio consequat.</p>
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
                <a
                  href='https://gabrielcodeproject.itch.io/spacegaze?secret=N234BvIkw2xGpcHt897BwabrU'
                  class='button small scrolly'
                >
                  Play Demo
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
                <p>Lien utile pour un github page</p>
                <a href='https://github.com/gitname/react-gh-pages'>tutorial</a>
              </article>
            </div>
          </div>

          <footer>
            <a href='#contact' class='button large scrolly'>
              Get in touch with me
            </a>
          </footer>
        </div>
      </article>

      <article id='contact' class='wrapper style4'>
        <div class='container medium'>
          <header>
            <h2>Have me make stuff for you.</h2>
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
              <h3>Find me on ...</h3>
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

      <script src='assets/js/jquery.min.js' />
      <script src='assets/js/jquery.scrolly.min.js' />
      <script src='assets/js/browser.min.js' />
      <script src='assets/js/breakpoints.min.js' />
      <script src='assets/js/util.js' />
      <script src='assets/js/main.js' />
    </div>
  )
}

export default App
