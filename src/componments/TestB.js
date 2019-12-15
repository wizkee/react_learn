import React, {Component} from 'react'

export default class TestBB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valB:'testB'
        }
    }

    componentWillMount(){
        console.log('B componentWillMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('B componentWillReceiveProps', nextProps, this.props)
    }
    shouldComponentUpdate() {
        // console.log('B shouldComponentUpdate 是否更新');
        var r = Math.random()
        console.log('B shouldComponentUpdate', r,r>0.5?'更新':'无更新');
        return r>0.5?true:false;
    }

    componentWillUpdate(){
        console.log('B componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('B componentDidUpdate 更新le')
    }

    componentDidMount() {
        console.log('B DOM componentDidMount ');
    }

    componentWillUnmount() {
        console.log('B componentWillUnmount 失去')
    }

    render() {
        console.log('B render')
        return ( <div>
            <h1>{this.state.valB}我是B:{this.props.aaa + ''}</h1>
        </div>
        )
    }

}