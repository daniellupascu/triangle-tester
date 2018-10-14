import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

import Result from '../Result/Result';
import './Tester.css';

// Tester component, which contains the form and the result
class Tester extends Component {

    // the state, which stores the values entered in the inputs
    state = {
        sides: {
            side1: '',
            side2: '',
            side3: ''
        },
    }

    // function that updates the state with the new values from the input
    valueChanged = (event, side) => {
        let sides = {...this.state.sides}
        sides[side] = event.target.value;
        this.setState({
            sides: sides
        });
    };

    render(){

        let inputs = null;
        // for each side in the this.state, an input component will be displayed. All the inputs are store in a variable
        if(this.state.sides) {
            inputs = (
                <div className='Form-container'>
                    {Object.keys(this.state.sides).map((side) => {
                        return <Input 
                                key={side}
                                type='number'
                                placeholder={side}
                                // on every change of the input, the value is saved in the state
                                onChange={(event) => this.valueChanged(event, side)}
                            />
                    })}
                </div>
            )
        }

        // return the inputs and the result component
        return(
            <div className='Tester-container'>
                {inputs}
                <Result sides={this.state.sides} />
            </div>
        );
    }

}

export default Tester;