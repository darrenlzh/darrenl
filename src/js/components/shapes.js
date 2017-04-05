import React from 'react'

export class Shapes extends React.Component {

   constructor(props) {
     super(props)
     this.handleMove = this.handleMove.bind(this)
     this.state = {
       shapers: [60, 20, -45, 30, 45],
       rotate: 0
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
         mid = window.innerWidth/2
     if (x < mid) {
       this.setState({ rotate: -(mid-x)/100 })
     } else {
       this.setState({ rotate: (x-mid)/100 })
     }
   }
   render() {
     return (
       <div className="graphic-group">
        {
          this.state.shapers.map((shaper, i) => {
            let style = {
              transform: `rotate(${shaper+this.state.rotate}deg)`
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
