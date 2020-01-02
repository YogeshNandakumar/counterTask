import React, { Component } from 'react'
import Sidebar from './Sidebar';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            type:'Increment',
            byValue:''
        };
        this.counter = this.counter.bind(this);
        this.sidebarData = this.sidebarData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("it is component will recieve", nextProps);
        if (nextProps.value != this.state.value) {
            this.setState({ value: nextProps.value});
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("it is in derived state", props, "hdjhdfjdjh", state);
    //     // this.setState({
    //     //     value : props.value
    //     // });
    //     return null
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("it is should component", nextProps,"jdjsfbhdshbj", nextState);
    //     // this.setState({
    //     //     value : nextProps.value
    //     // });
    //     return true;
    // }

    render() {
        return (
            <div>
                <div>
                    <Sidebar data={this.sidebarData}/>
                </div>
                <div>
                    <input  value={this.state.value} disabled></input>
                    <button onClick={this.counter}>{this.state.type}</button>
                </div>
            </div>
        )
    }

    sidebarData(data){
        this.setState({
            type:data.type,
            byValue:data.byValue
        })
    }

    counter(){
        if(this.state.type == "Increment"){
            this.setState({
                value: Number(this.state.value) + Number(this.state.byValue)
            })
        } else {
            this.setState({
                value: Number(this.state.value) - Number(this.state.byValue)
            })
        }
    }
}

export default Counter
