import React, { Component } from 'react'
import TestA from './TestA'



export default class InputA extends Component {
    constructor(props){
        super(props);
        this.state = {
            val: '1111'
        }
    }

    _change=e=>{
        console.log('e', e.target.value)
        this.setState({
            val : e.target.value
        })
    }

    componentWillMount(){
        console.log('componentWillMount1',this.state)
    }
 
    shouldComponentUpdate(){
        // console.log('shouldComponentUpdate2',this.state)
        var r = Math.random();
        console.log('r', r)
        return r>0.5
    }

    componentDidUpdate(){
        console.log('componentDidUpdate3',this.state)
    }
    componentDidMount(){
        console.log('componentDidMount4', this.state)
    }

    render() {
        const {val} = this.state;
        return (
            <div>
                <h1>{val}</h1>
                <TestA></TestA>
                <input onChange={ this._change } value={ val } />
            </div>
        )
    }
}
