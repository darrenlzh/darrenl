import React from 'react'

export class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="portfolio" className="main__container__content__inner">
        <h2>{this.props.name}</h2>
        <div className="portfolio">
          <article className="portfolio__item">
            <div className="image-wrap">
              <img src="src/img/student-success.png"/>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="image-wrap">
              <img src="src/img/student-success.png"/>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="image-wrap">
              <img src="src/img/student-success.png"/>
            </div>
          </article>
        </div>
      </div>
    )
  }
}
