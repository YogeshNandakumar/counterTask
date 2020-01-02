import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            type:'Increment',
            byValue:''
        }
        this.counterValue = this.counterValue.bind(this);
        this.counterType = this.counterType.bind(this);
    }

    render() {
        return (
            <menu>
                <div>
                    <button value="Increment" onClick={this.counterType}>Increment</button>
                    <button value="Decrement" onClick={this.counterType}>Decrement</button>
                    <input type="number" name="test" value={this.state.byValue} onChange={this.counterValue}></input>
                </div>
            </menu>
        )
    }

    counterValue(event){
        this.setState({
            byValue:event.target.value
        }, () => { this.props.data(this.state)})
        
    }

    counterType(event){
        this.setState({
            type:event.target.value
        }, () => {this.props.data(this.state)})
    }

}

export default Sidebar
