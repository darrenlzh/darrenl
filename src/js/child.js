import React from 'react'

export class Child extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        and this is she <b>{this.props.name}</b>.
      </div>
    )
  }
}
