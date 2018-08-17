import React from 'react'

import { Portfolio } from './portfolio.js'
import { ContactForm } from './contact-form.js'
import { MY_NAME, LANGUAGES, LANG_CODE, WORDS } from '../includes/language-config'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleLangMenuClick = this.handleLangMenuClick.bind(this)
    this.handleCloseLangMenuClick = this.handleCloseLangMenuClick.bind(this)
    this.handleLangClick = this.handleLangClick.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.state = {
      language: 0,
      langMenuOpen: false,
      words: WORDS[0]
    }
  }
  handleLangMenuClick() {
    var temp = !this.state.langMenuOpen
    this.setState({ langMenuOpen: temp })
  }
  handleCloseLangMenuClick() {
    this.setState({ langMenuOpen: false })
  }
  handleLangClick(i) {
    this.setState({ language: i, words: WORDS[i] })
  }
  mouseLeave(mouseLeft) {
    if (mouseLeft) {
      timeout = setTimeout(() => {
        this.setState({ langMenuOpen: false })
      }, 1500)
    }
    else {
      clearTimeout(timeout)
    }
  }
  render() {
    return (
      <div className="main">
        <div id="language" onMouseLeave={this.mouseLeave.bind(this, true)} onMouseEnter={this.mouseLeave.bind(this, false)}>
          <button onClick={this.handleLangMenuClick.bind(this)}
          className={this.state.langMenuOpen? 'open': ''}>
            {LANG_CODE[this.state.language]}
          </button>
          <ul className={this.state.langMenuOpen? 'open': ''}>
            {
              LANGUAGES.map((item, i) => {
                return (
                  <li key={i}
                  className={this.state.language==i? 'active':''}
                  onClick={this.handleLangClick.bind(this, i)}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <section id="intro" onClick={this.handleCloseLangMenuClick.bind(this)}>
          <div className="container">
              <h1>{this.state.words[0]}.<br/>
              {this.state.words[1]} <span>{MY_NAME}</span>.</h1>
              <p>
                {this.state.words[2]} <span>{this.state.words[3]}</span>, <span>{this.state.words[4]}</span> {this.state.words[5]} <span>{this.state.words[6]}</span>.
              </p>
          </div>
        </section>
        <section id="portfolio" onClick={this.handleCloseLangMenuClick.bind(this)}>
          <div className="title container">
            <h2>{this.state.words[7]}</h2>
          </div>
          <div className="summary container">
            <p>Here are some of my work.</p>
          </div>
          <Portfolio />
        </section>
        <section id="about">
          <div className="title container">
            <h2>About me</h2>
          </div>
          <div className="content container">
            <div className="profile row">
              <div className="col-xs-12 col-sm-12 col-md-3">
                <div className="profile__pic">
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-9">
                <p>I&#39;m an experienced Web Engineer & Designer with a knack for UX/UI design, creating modern and dynamic applications with the latest web technologies.</p>
              </div>
            </div>
            <h3 className="skills-header">My Tech Stack</h3>
            <div className="skills-group">
              <i id="javascript" className="devicon-javascript-plain"></i>
              <i id="react" className="devicon-react-original"></i>
              <i id="angular" className="devicon-angularjs-plain"></i>
              <i id="php" className="devicon-php-plain"></i>
              <i id="wordpress" className="devicon-wordpress-plain"></i>
              <i id="python" className="devicon-python-plain"></i>
              <i id="typescript" className="devicon-typescript-plain"></i>
              <i id="express" className="devicon-express-original"></i>
              <i id="sass" className="devicon-sass-original"></i>
              <i id="gulp" className="devicon-gulp-plain"></i>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="title container">
            <h2>Contact me</h2>
          </div>
          <ContactForm />
        </section>
      </div>
    )
  }
}

var timeout
