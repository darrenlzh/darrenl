import React from 'react'

export class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
