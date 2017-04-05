import React from 'react'

export class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(i) {
    this.props.click(i)
  }
  render() {
    return (
      <nav>
        <ul>
          {
            this.props.navlist.map((item, i) => {
              return (
                <li
                  key={i} className={this.props.current===i?'active':''}
                  onClick={this.handleClick.bind(this, i)}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}
