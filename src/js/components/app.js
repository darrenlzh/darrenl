import React from 'react'

import {Child} from './child.js'
import {Shapes} from './shapes.js'

export class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main">
        <div className="main-hero">
          <Shapes />
          <div className="main-hero__container">
            <h1>Darren Lim</h1>
            <div> engineer . developer . designer </div>
            {/* <Child name="Kind"/> */}
          </div>
        </div>
      </div>
    )
  }
}
