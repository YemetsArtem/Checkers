import React from 'react'
import Square from '../Square/Square'
import Checker from '../Checker/Checker'
import './Board.css'

const Board = () => {
    const squares = {
        rows: [1, 2, 3, 4, 5, 6, 7, 8],
        colums: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    }

    const getSquares = (squares) => squares.rows.reduce(
        (acc, row) => [
            ...acc,
            squares.colums.map((colum, i) => {
                const markupCondition = row % 2 === 0
                    ? i % 2 === 0
                    : i % 2 !== 0
                const content = (markupCondition && row !== 4 && row !== 5)
                    ? <Checker /> : null

                return (
                    <Square
                        key={row + colum}
                        id={row + colum}
                        markupCondition={markupCondition}
                        squareContent={content}
                    />
                )
            })
        ], []
    );

    return (
        <div className="board">
            <ul className="board">
                {getSquares(squares)}
            </ul>
        </div>
    )
}

export default Board
