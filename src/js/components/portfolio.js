import React from 'react'
import { Link } from 'react-router-dom'

import { scrollTo } from '../utils/scrollTo'
import { ITEMS } from '../includes/portfolio-items'

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
    scrollTo(document.documentElement, scrollToValue, 600)
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
        <article className="view-all item-container">
          <Link to="portfolio">View All</Link>
        </article>
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
      <article className={`item-container`} onClick={this.props.click}>
        <div className="item">
          <img src={this.props.cover} className="img-thumbnail"/>
        </div>
      </article>
    )
  }
}
