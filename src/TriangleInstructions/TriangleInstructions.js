import React from 'react';

import './TriangleInstructions.css'

const triangleInstructions = () => (
    <div className='TriangleInstructionsContainer'>
        <h2>How to make sure the values you enter form a triangle:</h2>
        <h4>Determining if three side lengths can make a triangle is easier than it looks. All you have to do is use the Triangle Inequality Theorem, which states that the sum of two side lengths of a triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.</h4>
        <ul>
            <li>a+b > c</li>
            <li>a+c > b</li>
            <li>b+c > a</li>
        </ul>
    </div>
)

export default triangleInstructions;