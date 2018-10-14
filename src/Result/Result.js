import React, { Component } from 'react';

// Result class component which determines the type of triangle and draws 
// it on the page using the props it recieves from the parent component
class Result extends Component {

    // function that checks the validity of the provided lengths of the sides
    checkValidityOfValues = (sides) => {

        // by default, the values are not valid
        let valuesAreValid = false;

        // check if each value is a number and it's not an empty string when trimmed
        for(let side in sides) {
            if (!isNaN(sides[side]) && sides[side].trim() !== ''){
                valuesAreValid = true;
            }
            // if the conditions are not met, values are not valid and stop the for loop
            else {
                valuesAreValid = false;
                break;
            } 
        }

        return valuesAreValid;
    }
    
    render() {

        // check if the values enetered by the user are numeric and not empty 
        if(this.checkValidityOfValues(this.props.sides)){

            // save the side lengths in constants
            const side1 = this.props.sides.side1;
            const side2 = this.props.sides.side2;
            const side3 = this.props.sides.side3;

            // determine the type of triangle by comparing the sides length
            // by default, the triangle does not have a type
            let triangleType = null;
            // if all sides ar equal, the triangle is equilateral
            if(side1 === side2 && side1 === side3){
                triangleType = 'equilateral';
            }
            // else if 2 sides are equal then it is isosceles
            else if (side1 === side2 || side1 === side3 || side2 === side3) {
                triangleType = 'isosceles';
            } 
            // in case there is not a pair of equal sides, then the triangle is scalene
            else {
                triangleType = 'scalene';
            }

            // based on the length of the sides, create custom css style properties
            // so that the triangle that is displayed reflets the values entered in the fields
            const side1Style = this.props.sides.side1 + 'px solid transparent';
            const side2Style = this.props.sides.side2 + 'px solid transparent';
            const side3Style = this.props.sides.side3 + 'px solid green';

            return(
                <div>
                    {/* text that displays the type of triangle */}
                    <p>you made a {triangleType} triangle</p> 
                    {/* graphic representation of the triangle using the custom css rules */}
                    <div id='triangle' style={{
                        width: 0,
                        height: 0,
                        borderLeft: side1Style,
                        borderRight: side2Style,
                        borderBottom: side3Style,
                        }}>
                    </div>
                </div>
            )      
        }
        // in case not all the values are inserted display the text below 
        else {
            return(
                <div>
                    <p>Please enter numeric values in all the inputs to form a triangle</p> 
                </div>
            )      
        }
    }
}

export default Result;