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

const Board = ({game, lockAt, moveTo}) => (
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
            onPegClick={ e => {e.stopPropagation(); lockAt(x, y) }}
            onHoleClick={ e => {e.stopPropagation(); moveTo(x, y) }}
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