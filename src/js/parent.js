import React from 'react'

import {Child} from './child.js'

export class Parent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="child"/>
      </div>
    )
  }
}
