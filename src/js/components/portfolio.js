import React from 'react'

export class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div className="row">
          {
            ITEMS.map((item, i) => {
              return (
                <Item key={i} name={item.name} desc={item.desc} img={item.img} />
              )
            })
          }
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
      <article className="item col-sm-6 col-md-4 col-lg-3">
        <div className="img-responsive">
          <img src={this.props.img} className="img-thumbnail"/>
        </div>
      </article>
    )
  }
}

const ITEMS = [
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.jpg'
  },
  {
    name: 'Student Success 222',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.jpg'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.jpg'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.jpg'
  }
]
