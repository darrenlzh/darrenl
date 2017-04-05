import React from 'react'

import {Nav} from './nav.js'
import {Shapes} from './shapes.js'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleNavClick = this.handleNavClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.state = {
      myname: 'Darren Lim',
      tagline: 'engineer . developer . designer',
      navlist: ['portfolio', 'about', 'contact'],
      current: -1,
      movec: false
    }
  }
  handleNavClick(i) {
    this.setState({ current: i, movec: true })
  }
  handleCloseClick() {
    this.setState({ movec: false })
  }
  render() {
    return (
      <div>
        <div className="main">
          <Shapes />
          <div className={`main__container ${this.state.movec?'move':'center'}`}>
            <div className="main__container__inner">
              <h1>{this.state.myname}</h1>
              <div>{this.state.tagline}</div>
              <Nav navlist={this.state.navlist}
                  current={this.state.current}
                  click={this.handleNavClick.bind(this)}/>
            </div>
            <div className="main__container__content">
              <button onClick={this.handleCloseClick}>close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
