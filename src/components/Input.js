import React, { Component } from 'react';
import Counter from './Counter'

export class Input extends Component {

    constructor(props){
        super(props)
        this.state = {
            value : '',
            counterValue : ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <input  type="number" value={this.state.value} onChange={this.onInputChange}></input>
                <button onClick={this.onSubmit}>submit</button>
                <div>
                    <Counter value={this.state.counterValue}/>
                </div>
            </div>
        )
    }

    onInputChange(event){
        this.setState({
            value: event.target.value
        },() => {console.log("updated", this.state.value);
        });
    }

    onSubmit(){
        if(this.state.value !=''){
            this.setState({
                counterValue:this.state.value
            })
        }
    }
}

export default Input
