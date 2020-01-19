import React from 'react';
// import { Link } from 'react-router-dom';

/**
 * 父组件v2
 */
export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.random() * 100,
      val: 'Container input改变val'
    };
  }

  propsChange() {
    this.setState({
      num: Math.random() * 100
    });
  }

  setLifeCycleState() {
    this.refs.rLifeCycle.setTheState();
  }

  forceLifeCycleUpdate() {
    this.refs.rLifeCycle.forceItUpdate();
  }

  unmountLifeCycle() {
    // 这里卸载父组件也会导致卸载子组件
    React.unmountComponentAtNode(document.getElementById("container"));
  }

  parentForceUpdate() {
    this.forceUpdate();
  }
  // componentWillMount(){
  //   console.log('父--componentWillMount')
  // }
  // componentWillUpdate(){
  //   console.log('父-componentWillUpdate')
  // }
  static getDerivedStateFromProps (nextProps, prevState){
    console.log('父--getDerivedStateFromProps');
    return null
  }

  componentDidUpdate(){
    console.log('父--componentDidUpdate')
  }

  componentDidMount(){
    console.log('父--componentDidMount')
  }

  componentDidCatch(error, info){
    alert('Container错误');
    console.log('error,info', error,info)
  }

  _onchang=e=>{
    this.setState({
      val: e.target.value
    })
  }

  render() {
  return (
    <div style={{border:'1px solid #000'}}>

      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/a'>a2</Link></li>
      </ul> */}

      <LifeCycle ref="rLifeCycle" num={this.state.num} />
      <div>
        <input onChange={ this._onchang }   value={this.state.val} />

        <button onClick={this.propsChange.bind(this)}>propsChange num</button>
        <button onClick={this.setLifeCycleState.bind(this)}>setState</button>
        <button onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</button>
        <button onClick={this.unmountLifeCycle.bind(this)}>unmount</button>
        <button onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</button>
      </div>
    </div>
  );
  }
}


class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      str: "LifeCycle str ",
      numChild:10000
    };
  }
  // 16.4 代替了这些钩子函数
  // componentWillMount() {
  //   console.log("componentWillMount3");
  // }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate7");
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps5");
  // }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { num } = nextProps;
    // 当传入的type发生变化的时候，更新state
    console.log('prevState,num', prevState,num)

    if (num !== prevState.num) {
      return {
        numChild:num
      };
    }
    // 否则，对于state不进行任何操作
    return null
  }

  componentDidMount() {
    console.log("子-componentDidMount");
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log("子-shouldComponentUpdate6");
    return nextProps.num>50?true:false
    // return true; // 记得要返回true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('prevProps,prevState', prevProps,prevState)
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("子-componentDidUpdate",prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("子-componentWillUnmount");
  }



  setTheState() {
    let s = "hello";
    if (this.state.str === s) {
      s = "HELLO";
    }
    this.setState({
      str: s
    });
  }

  forceItUpdate() {
    this.forceUpdate();
  }

  componentDidCatch(error, info){
    alert('Container错误');
    console.log('error,info', error,info)
  }

  render() {
    return(
      <div style={{border:'1px solid red'}}>
        <h2>props.num:: {parseInt(this.props.num)}</h2>
        <h2>str::{this.state.str}</h2>
        <h2>numChild::{this.state.numChild}</h2>
      </div>
    );
  }
}