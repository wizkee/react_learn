import React from 'react'
// import TestA from './TestA'
export default class Cc extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        c: 0,
        a:0,//之后用
        b:0//之后用
      }
    }
    componentDidMount() {
    //   this.setState((state,props)=>{
    //       return { c: state.c+2 }
    //   },()=>{
    //       console.log('this.state', this.state)
    //   })

      this.setState({
        a: this.state.a + 1
      })
      this.setState({
        b: this.state.b + 1
      })

      this.setState((state,props)=>({c:++state.c}));
      this.setState((state,props)=>({c:++state.c}));
      this.setState((state,props)=>({c:++state.c}));
      this.setState((state,props)=>({c:++state.c}));
    
      this.setState({
        c: this.state.c + 1
      })

      this.setState({
        c: this.state.c + 1
      })

      this.setState({
        c: this.state.c + 1
      })



      console.log(this.state.c)//此时输出还是0
    }
    render() {
      return (
        <div>
            ccc
        </div>
      )
    }
  }