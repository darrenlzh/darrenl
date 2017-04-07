import React from 'react'

export class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="portfolio" className="main__container__content__inner">
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
