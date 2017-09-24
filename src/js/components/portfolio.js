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
    let temp = !this.state.view
    this.setState({ current: i, view: temp })

    const view = document.getElementById('view-container'),
          vHeight = view.offsetHeight,
          vpHeight = window.innerHeight

    let  vOffset = 0
    if (vHeight < vpHeight) vOffset = (vpHeight - vHeight) / 2

    let scrollToValue = view.offsetTop - vOffset
    scrollTo(document.body, scrollToValue, 600)
  }
  render() {
    return (
      <div className="inner" id="view-container">
        {
          ITEMS.map((item, i) => {
            return (
              <Item key={i} cover={item.cover} click={this.handleClick.bind(this, i)}/>
            )
          })
        }
        <div id="view" className={this.state.view? 'viewing' : ''}>
          <div className="view-inner">
            <div className="row">
              <div className="inner-left col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <a className="image" href={this.state.current>=0? ITEMS[this.state.current].link : ''} target="_blank">
                  <img src={this.state.current>=0? ITEMS[this.state.current].cover : ''}/>
                </a>
              </div>
              <div className="inner-right col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <h3><a href={this.state.current>=0? ITEMS[this.state.current].link : ''} target="_blank">{this.state.current>=0? ITEMS[this.state.current].name : ''}</a></h3>
                <p>{this.state.current>=0? ITEMS[this.state.current].desc : ''}</p>
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
    name: 'Weather in Angular 2',
    desc: 'A weather forecast app built with Angular 2, Node and Express.',
    cover: 'img/weather-cover.png',
    main: 'img/student-success.png',
    link: 'http://darrenl.im/weather'
  },
  {
    name: 'Student Success',
    desc: 'University at Buffalo Student Success site. Built with Sass, Pug, vanilla JavaScript and Gulp tools to automate workflow.',
    cover: 'img/student-success-cover.png',
    main: 'img/student-success.png',
    link: 'http://studentsuccess.buffalo.edu'

  },
  {
    name: 'Weather App',
    desc: 'Weather forecast app built with AngularJS and apixu API.',
    cover: 'img/weather-app-cover.png',
    main: 'img/student-success.png',
    link: 'http://darrenl.im/weather-app'
  },
  {
    name: 'Academic Integrity',
    desc: 'University at Buffalo Academic Integrity site. Built with Sass & Pug with Gulp tools.',
    cover: 'img/academic-integrity-cover.png',
    main: 'img/student-success.png',
    link: 'http://academicintegrity.buffalo.edu'
  },
  {
    name: 'Marquise Patisserie & Chocolaterie',
    desc: 'Marquise Patisserie & Chocolaterie online store front.',
    cover: 'img/marquise-cover.png',
    main: 'img/student-success.png',
    link: '#'
  },
  {
    name: 'MozzCato Food Trading Co.',
    desc: 'MozzCato online store front.',
    cover: 'img/mozzcato-cover.png',
    main: 'img/student-success.png',
    link: '#'
  },
  {
    name: 'iLearns Kinesthetic Learning App',
    desc: 'Classroom learning with technology for elementry students',
    cover: 'img/ilearns-cover.png',
    main: 'img/student-success.png',
    link: '#'
  }
]

function scrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start,
      increment = 20

  var animateScroll = function(elapsedTime) {
      elapsedTime += increment
      var position = easeInOut(elapsedTime, start, change, duration)
      element.scrollTop = position
      if (elapsedTime < duration) {
          setTimeout(function() {
              animateScroll(elapsedTime)
          }, increment)
      }
  };

  animateScroll(0)
}

function easeInOut(currentTime, start, change, duration) {
  currentTime /= duration / 2
  if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start
  }
  currentTime -= 1
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
}
