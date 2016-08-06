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
      if(locked){
        if(y-2 >= minY){
          console.log('limits up');
          // If the cutting up is within the board limits
          if(board[y-1][x] == 'P' && board[y-2][x] == 'E'){
            // If its going over a peg and landing on an empty hole
            // This is a valid cut
            const newBoard = [...board];
            newBoard[y][x] = 'E';
            newBoard[y-1][x] = 'E';
            newBoard[y-2][x] = 'P';

            return {
              board: newBoard,
              selected: {x: x, y: y-2},
              locked: false,
            }
          }
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
      if(locked){
        if(y+2 <= maxY){
          // If the cutting down is within the board limits
          if(board[y+1][x] == 'P' && board[y+2][x] == 'E'){
            console.log('done');
            // If its going over a peg and landing on an empty hole
            // This is a valid cut
            const newBoard = [...board];
            newBoard[y][x] = 'E';
            newBoard[y+1][x] = 'E';
            newBoard[y+2][x] = 'P';

            return {
              board: newBoard,
              selected: {x: x, y: y+2},
              locked: false,
            }
          }
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
      if(locked){
        if(x+2 <= maxX){
          // If the cutting up is within the board limits
          if(board[y][x+1] == 'P' && board[y][x+2] == 'E'){
            // If its going over a peg and landing on an empty hole
            // This is a valid cut
            const newBoard = [...board];
            newBoard[y][x] = 'E';
            newBoard[y][x+1] = 'E';
            newBoard[y][x+2] = 'P';

            return {
              board: newBoard,
              selected: {x: x+2, y: y},
              locked: false,
            }
          }
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
      if(locked){

        if(x-2 >= minX){
          // If the cutting up is within the board limits
          if(board[y][x-1] == 'P' && board[y][x-2] == 'E'){
            // If its going over a peg and landing on an empty hole
            // This is a valid cut
            const newBoard = [...board];
            newBoard[y][x] = 'E';
            newBoard[y][x-1] = 'E';
            newBoard[y][x-2] = 'P';

            return {
              board: newBoard,
              selected: {x: x-2, y: y},
              locked: false,
            }
          }
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
      return state;
  }
}

export default game