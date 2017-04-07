import React from 'react'

import {Nav} from './nav.js'
import {Shapes} from './shapes.js'
import {Portfolio} from './portfolio.js'
import {About} from './about.js'
import {Contact} from './contact.js'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.state = {
      current: -1,
      movec: false
    }
  }
  handleNavClick(i) {
    this.setState({ current: i, movec: true })
  }
  handleCloseClick() {
    this.setState({ current: -1, movec: false })
  }
  renderContent() {
    if (this.state.current>=0 && this.state.movec==true) {
      return (NAV_LIST[this.state.current].content)
    }
  }
  render() {
    return (
      <div className="main">
        <Shapes />
        <div className={`main__container ${this.state.movec?'move':'center'}`}>
          <div className="main__container__inner">
            <h1>{MY_NAME}</h1>
            <div>{TAG_LINE}</div>
            <Nav navlist={NAV_LIST}
                current={this.state.current}
                click={this.handleNavClick.bind(this)}/>
          </div>
          <div className="main__container__content">
            <div className="close"
                onClick={this.handleCloseClick}>
              {CANCEL_SVG}
            </div>
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}

const MY_NAME = 'Darren Lim',
      TAG_LINE = 'engineer . developer . designer',
      NAV_LIST = [
        {
          name: 'portfolio',
          content: <Portfolio name="Portfolio"/>
        },
        {
          name: 'about',
          content: <About name="About me"/>
        },
        {
          name: 'contact',
          content: <Contact name="Contact"/>
        }
      ]

const CANCEL_SVG = (
  <svg height="64" width="64" version="1.1" viewBox="0 0 64 64">
	<g>
		<path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z" fill="#1D1D1B"/>
	</g>
</svg>
)
