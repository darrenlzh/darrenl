import React from 'react'

import {Portfolio} from './portfolio.js'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleLangMenuClick = this.handleLangMenuClick.bind(this)
    this.handleLangClick = this.handleLangClick.bind(this)
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
  handleLangClick(i) {
    this.setState({ language: i, words: WORDS[i] })
  }
  render() {
    return (
      <div className="main">
        <div id="language">
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
        <section id="intro">
          <div className="container">
              <h1>{this.state.words[0]}.<br/>
              {this.state.words[1]} <span>{MY_NAME}</span>.</h1>
              <p>
                {this.state.words[2]} <span>{this.state.words[3]}</span>, <span>{this.state.words[4]}</span> {this.state.words[5]} <span>{this.state.words[6]}</span>.
              </p>
          </div>
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
        </section>
        <section id="contact">
        </section>
      </div>
    )
  }
}

const MY_NAME = 'Darren Lim',
      LANGUAGES = ['english', 'français', 'dansk', 'malay'],
      LANG_CODE = ['EN', 'FR', 'DK', 'MY'],
      WORDS = [
        ['Hello', "I'm", "I am an", 'engineer', 'developer', 'and', 'designer'],
        ['Salut', "Je m'appelle", 'Je suis', 'ingénieur', 'développeur', 'et', 'concepteur'],
        ['Hej', "Je heder", 'Jeg er', 'ingeniør', 'udvikler', 'og', 'desginer'],
        ['Hello', "Saya", 'Saya seorang', 'engineer', 'developer', 'dan', 'desginer']
      ]
