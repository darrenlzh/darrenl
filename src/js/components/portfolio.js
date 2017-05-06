import React from 'react'

export class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="portfolio" className="main__container__content__inner">
        <h2>{this.props.name}</h2>
        <div className="grid portfolio">
          <section className="row">
            {
              ITEMS.map((item, i) => {
                return (
                  <Item key={i} name={item.name} desc={item.desc} img={item.img} />
                )
              })
            }
          </section>
        </div>
      </div>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <article className="portfolio__item col">
        <div className="image-wrap">
          <img src={this.props.img}/>
        </div>
      </article>
    )
  }
}

const ITEMS = [
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success.png'
  },
  {
    name: 'Student Success 222',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success.png'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success.png'
  }
]
