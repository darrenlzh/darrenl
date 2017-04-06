import React from 'react'

export class Shapes extends React.Component {

   constructor(props) {
     super(props)
     this.handleMove = this.handleMove.bind(this)
     this.state = {
       shapers: [60, 20, -45, 30, 45],
       translatex: 0,
       translatey: 0
     }
   }
   componentDidMount() {
     window.addEventListener('mousemove', this.handleMove)
   }
   componentWillUnmount() {
     window.removeEventListener('mousemove', this.handleMove)
   }
   handleMove(e) {
     let x = e.clientX,
         y = e.clientY,
         midx = window.innerWidth/2,
         midy = window.innerHeight/2
     if (x < midx) {
       this.setState({ translatex: (midx-x)/30 })
     } else {
       this.setState({ translatex: -(x-midx)/30 })
     }
     if (y < midy) {
       this.setState({ translatey: (midy-y)/30 })
     } else {
       this.setState({ translatey: -(y-midy)/30 })
     }
   }
   render() {
     return (
       <div className="graphic-group">
        {
          this.state.shapers.map((shaper, i) => {
            let style = {
              transform: `translateX(${this.state.translatex}px) translateY(${this.state.translatey}px) rotate(${shaper}deg)`
            }
            return (
              <div className="shape" key={i} style={style}/>
            )
          })
        }
       </div>
     )
   }
 }
