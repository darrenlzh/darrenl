import React from 'react'

import {Child} from './child.js'

export class Parent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main">
        <div className="mountain-range">
          <div className="mountain"/>
          <div className="mountain"/>
        </div>
        <div className="main__container">
          <h1>Darren Lim</h1>
          <div> This is the parent. </div>
          <Child name="Kind"/>
        </div>
      </div>
    )
  }
}
