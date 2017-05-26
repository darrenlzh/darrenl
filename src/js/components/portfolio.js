import React from 'react'

export class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: -1,
      view: false
    }
    this.handleClick = this.handleClick.bind(this)
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
              <Item key={i} id={i} name={item.name} desc={item.desc} cover={item.cover} click={this.handleClick.bind(this, i)} current ={this.state.current}/>
            )
          })
        }
        <div id="view" className={this.state.view? 'viewing' : ''}>
          <div className="view-inner">
            <div className="row">
              <div className="inner-left col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <img src={this.state.current>=0? ITEMS[this.state.current].cover : ''}/>
              </div>
              <div className="inner-right col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <h3>{this.state.current>=0? ITEMS[this.state.current].name : ''}</h3>
              </div>
            </div>
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
      <article className={`item col-xs-6 col-sm-6 col-md-4 col-lg-3`} onClick={this.props.click}>
        <img src={this.props.cover} className="img-thumbnail"/>
      </article>
    )
  }
}

const ITEMS = [
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site.',
    cover: 'img/student-success-cover.png',
    main: 'img/student-success.png'

  },
  {
    name: 'Weather App',
    desc: 'Weather forecast app built with Angular',
    cover: 'img/weather-app-cover.png',
    main: 'img/student-success.png'
  },
  {
    name: 'Academic Integrity',
    desc: 'University at Buffalo Academic Integrity site.',
    cover: 'img/academic-integrity-cover.png',
    main: 'img/student-success.png'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    cover: 'img/student-success-cover.png',
    main: 'img/student-success.png'
  },
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site.',
    cover: 'img/student-success-cover.png',
    main: 'img/student-success.png'
  },
  {
    name: 'Weather App',
    desc: 'Weather forecast app built with Angular',
    cover: 'img/weather-app-cover.png',
    main: 'img/student-success.png'
  },
  {
    name: 'Academic Integrity',
    desc: 'University at Buffalo Academic Integrity site.',
    cover: 'img/academic-integrity-cover.png',
    main: 'img/student-success.png'
  },
  {
    name: 'Student Success 333',
    desc: 'University at Buffalo Student Success site.',
    cover: 'img/student-success-cover.png',
    main: 'img/student-success.png'
  }
]
