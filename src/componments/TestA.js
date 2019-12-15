import React, { Component } from 'react'
import TestBB from './TestB';


export default class TestA extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 1,
      bb:'bbbb11'
    }
    this.handletest = this.handletest.bind(this)
  }

  componentWillMount(){
    console.log('A componentWillMount')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   var isUpdate = nextState.count !== this.state.count;
  //   console.log('isUpdate', isUpdate,nextProps, nextState)
  //   return isUpdate
  // }

  componentWillReceiveProps(){
    console.log('A componentWillReceiveProps')
  }

  componentWillUpdate(){
    console.log('A componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('A更新 componentDidUpdate')
  }

  componentDidMount(){
    console.log('A DOM 结束 componentDidMount')
  }

  handletest(){
    this.setState({count:++this.state.count});
    // this.setState(
    //   (state,props)=>({ count: ++state.count }),
    //   e=>console.log(e,'e回调',this.state)
    // ) 
  }


  

  render() {
    console.log('A 执行 render')
    return (
      <section>
        <h1>{this.state.count}</h1>

        <button onClick={ this.handletest } >testA: count++</button> <br/>
        <TestBB aaa={this.state.count}/>

          {/* <div style={{display: this.state.count === true? 'none':'block'}}>
            countcount
          </div> */}

           {/* { 
            this.state.count&&<TestBB  aaa={this.state.count}/>
          } */}
      </section>
    )
  }
}
