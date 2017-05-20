import React from 'react'

export class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: -1,
      hover: false,
      view: false
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  mouseOver(i) {
    this.setState({ current: i, hover: true })
  }
  mouseOut(i) {
    this.setState({ current: -1, hover: false })

  }
  handleClick(i) {
    var temp = !this.state.view
    this.setState({ current: i, view: temp })
  }
  render() {
    return (
      <div className="inner">
        {
          ITEMS.map((item, i) => {
            return (
              <Item key={i} id={i} name={item.name} desc={item.desc} img={item.img} click={this.handleClick.bind(this, i)} over={this.mouseOver.bind(this, i)} out={this.mouseOut.bind(this)} current ={this.state.current} hover={this.state.hover}/>
            )
          })
        }
        <div id="view" className={this.state.view? 'viewing' : ''}>
          <div className="view-inner">
            <button onClick={this.handleClick.bind(this, -1)}>
              <i className="material-icons">close</i>
            </button>
          </div>
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
      <article className={`item col-xs-6 col-sm-6 col-md-4 col-lg-3 ${this.props.hover && this.props.current==this.props.id? 'hovered' : ''}`} onClick={this.props.click} onMouseOver={this.props.over} onMouseOut={this.props.out}>
        <img src={this.props.img} className="img-thumbnail"/>
        <div className="hover-layer">
          <h3>{this.props.name}</h3>
          <p>{this.props.desc}</p>
        </div>
      </article>
    )
  }
}

const ITEMS = [
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.png'
  },
  {
    name: 'Weather App',
    desc: 'Weather forecast app built with Angular',
    img: 'src/img/weather-app-cover.png'
  },
  {
    name: 'Academic Integrity',
    desc: 'University at Buffalo Academic Integrity site.',
    img: 'src/img/academic-integrity-cover.png'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.png'
  },
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.png'
  },
  {
    name: 'Weather App',
    desc: 'Weather forecast app built with Angular',
    img: 'src/img/weather-app-cover.png'
  },
  {
    name: 'Academic Integrity',
    desc: 'University at Buffalo Academic Integrity site.',
    img: 'src/img/academic-integrity-cover.png'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    img: 'src/img/student-success-cover.png'
  }
]
