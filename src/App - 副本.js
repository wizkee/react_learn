import React from 'react';
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Initial render1");
    console.log("constructor2");
    this.state = {
      str: "hello18"
    };
  }

  componentWillMount() {
    console.log("componentWillMount3");
  }

  componentDidMount() {
    console.log("componentDidMount4");
  }

  componentWillReceiveProps(nextProps) {

    console.log("componentWillReceiveProps5嘻嘻嘻222");
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log("shouldComponentUpdate6啊啊啊");
    console.log('nextState', nextState)
    return nextProps.num>50?true:false
    // return true; // 记得要返回true
  }

  componentWillUpdate() {
    console.log("componentWillUpdate7");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate8");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount9");
  }

  setTheState() {
    let s = "hello";
    if (this.state.str === s) {
      s = "HELLO";
    }
    console.log('s', s)
    this.setState({
      str: s
    });
  }

  forceItUpdate() {
    this.forceUpdate();
  }

  render() {
  console.log("render");
  return(
  <div>
    <span>{"Props::"}<h2>{parseInt(this.props.num)}</h2></span>
    <br />
    <span>{"State::"}<h2>{this.state.str}</h2></span>
  </div>
  );
  }
}



class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.random() * 100
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

  componentDidUpdate(){
    console.log('222', 222)
  }

  render() {
  return (
    <>
      <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
      <div>
        <button onClick={this.propsChange.bind(this)}>propsChange</button>
        <button onClick={this.setLifeCycleState.bind(this)}>setState</button>
        <button onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</button>
        <button onClick={this.unmountLifeCycle.bind(this)}>unmount</button>
        <button onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</button>
      </div>
    </>
  );
  }
}

export default Container;