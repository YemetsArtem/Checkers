import React from 'react'
import './Square.css'

const Square = ({ markupCondition , squareContent }) => {
    const color = markupCondition ? "brown" : "rgb(252, 246, 168)";
    
    return (
        <li className="square" style={{ backgroundColor: color }}>
            { squareContent }
        </li>
    );
}

export default Square