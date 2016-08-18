import React from 'react'
import Hole from './Hole'

const styles = {
  board: {
    padding: '15px',
  },
  row: {
    margin: '0',
    textAlign: 'center'
  }
}

const Board = ({game}) => (
  <div style={styles.board}>
  {
    game.board.map((row, y) => (
      <div style={styles.row} key={`row${y}`}>
      {
      row.map((hole, x) => (
        hole=='X' ? null : (
          <Hole
            hole={ hole }
            selected={ x==game.selected.x && y==game.selected.y }
            locked={ game.locked }
            moved={ game.moved }
            key={ `hole${x}${y}` }
          />
        )
      ))
      }
      </div>
    ))
  }
  </div>
)

export default Board