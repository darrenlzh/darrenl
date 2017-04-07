import React from 'react'

export class Shapes extends React.Component {

   constructor(props) {
     super(props)
     this.handleMove = this.handleMove.bind(this)
     this.state = {
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
     const F_CONST = 30
     let x = e.clientX,
         y = e.clientY,
         midx = window.innerWidth/2,
         midy = window.innerHeight/2
     if (x < midx) {
       this.setState({ translatex: (midx-x)/F_CONST })
     } else {
       this.setState({ translatex: -(x-midx)/F_CONST })
     }
     if (y < midy) {
       this.setState({ translatey: (midy-y)/F_CONST })
     } else {
       this.setState({ translatey: -(y-midy)/F_CONST })
     }
   }
   render() {
     return (
       <div className="graphic-group">
        {
          SHAPE_RS.map((shaper, i) => {
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

const SHAPE_RS = [60, 20, -45, 30, 45]
