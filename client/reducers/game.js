import {
  isValidUpCut,
  isValidDownCut,
  isValidLeftCut,
  isValidRightCut,
  isGameOver,
} from '../rules'

import environment from './environment'

function game(state={board:[], selected: {x:3, y:3}, locked: false}, action){
  const {x, y} = state.selected;
  const { board, locked } = state;
  const maxY = x<2 || x>4 ? 4: 6
  const minY = x<2 || x>4 ? 2: 0
  const maxX = y<2 || y>4 ? 4: 6
  const minX = y<2 || y>4 ? 2: 0
  let newY, newX;

  switch(action.type) {

    case 'MOVE_UP' :
      // Check if cutting
      if(locked && isValidUpCut(x, y, board)){
        // This is a valid cut
        const newBoard = [...board];
        newBoard[y][x] = 'E';
        newBoard[y-1][x] = 'E';
        newBoard[y-2][x] = 'P';

        const gameOver = isGameOver(board);

        return {
          board: newBoard,
          selected: {x: x, y: y-2},
          locked: false,
          gameOver
        }
      }

      // Not cutting
      newY = y-1 < minY ? maxY : y-1

      return {
        ...state,
        selected: {x: x, y: newY},
        locked: false,
      }

    case 'MOVE_DOWN' :
    // Check if cutting
      if(locked && isValidDownCut(x, y, board)){
        // If its going over a peg and landing on an empty hole
        // This is a valid cut
        const newBoard = [...board];
        newBoard[y][x] = 'E';
        newBoard[y+1][x] = 'E';
        newBoard[y+2][x] = 'P';

        const gameOver = isGameOver(board);

        return {
          board: newBoard,
          selected: {x: x, y: y+2},
          locked: false,
          gameOver
        }
      }

      newY = y+1 > maxY ? minY : y+1

      return {
        ...state,
        selected: {x: x, y: newY},
        locked: false,
      }

    case 'MOVE_RIGHT' :
      // Check if cutting
      if(locked && isValidRightCut(x, y, board)){
        // If its going over a peg and landing on an empty hole
        // This is a valid cut
        const newBoard = [...board];
        newBoard[y][x] = 'E';
        newBoard[y][x+1] = 'E';
        newBoard[y][x+2] = 'P';

        const gameOver = isGameOver(board);

        return {
          board: newBoard,
          selected: {x: x+2, y: y},
          locked: false,
          gameOver
        }
      }

      newX = x+1 > maxX ? minX : x+1

      return {
        ...state,
        selected: {x: newX, y: y},
        locked: false,
      }

    case 'MOVE_LEFT':
      // Check if cutting
      if(locked && isValidLeftCut(x, y, board)){
        // If its going over a peg and landing on an empty hole
        // This is a valid cut
        const newBoard = [...board];
        newBoard[y][x] = 'E';
        newBoard[y][x-1] = 'E';
        newBoard[y][x-2] = 'P';

        const gameOver = isGameOver(board);

        return {
          board: newBoard,
          selected: {x: x-2, y: y},
          locked: false,
          gameOver
        }
      }

      newX = x-1 < minX ? maxX : x-1

      return {
        ...state,
        selected: {x: newX, y: y},
        locked: false,
      }

    case 'LOCK':
      return {
        ...state,
        locked: !state.locked,
      }

    default:
      return environment(state, action);
  }
}

export default game