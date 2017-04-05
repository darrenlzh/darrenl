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
     console.log(this.state.test)
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
     let shapes = []
     for(let i=0, len=this.state.shapers.length; i<len; i++) {
       let style = {
         transform: `rotate(${this.state.shapers[i]+this.state.rotate}deg)`
       }
       shapes.push( <div className="shape" key={i} style={style}/> )
     }
     return (
       <div className="graphic-group">
        {shapes}
       </div>
     )
   }
 }
