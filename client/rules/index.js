export function getMaxY(x, y){
  return x<2 || x>4 ? 4: 6;
}

export function getMinY(x, y){
  return x<2 || x>4 ? 2: 0;
}

export function getMaxX(x, y){
  return y<2 || y>4 ? 4: 6;
}

export function getMinX(x, y){
  return y<2 || y>4 ? 2: 0;
}

export function isValidUpCut(x, y, board){
  // If the cutting up is within the board limits
  const minY = getMinY(x, y);
  return (y-2 >= minY) && (board[y][x] == 'P' && board[y-1][x] == 'P' && board[y-2][x] == 'E');
}

export function isValidDownCut(x, y, board){
  // If the cutting down is within the board limits
  const maxY = getMaxY(x, y);
  return (y+2 <= maxY) && (board[y][x] == 'P' && board[y+1][x] == 'P' && board[y+2][x] == 'E');
}

export function isValidRightCut(x, y, board){
  const maxX = getMaxX(x, y);
  return (x+2 <= maxX) && (board[y][x] == 'P' && board[y][x+1] == 'P' && board[y][x+2] == 'E');
}

export function isValidLeftCut(x, y, board){
  const minX = getMinX(x, y);
  return (x-2 >= minX) && (board[y][x] == 'P' && board[y][x-1] == 'P' && board[y][x-2] == 'E');
}

export function isGameOver(board){
  for(let i = 0; i<board.length; i++){
    let row = board[i]
    for(let j=0; j<row.length; j++){
      if(isValidUpCut(j, i, board) || isValidDownCut(j, i, board) ||
         isValidRightCut(j, i, board) || isValidLeftCut(j, i, board)) {

        return false;
      }
    }
  }

  return true;
}

export function pegCount(board){
  let count = 0;
  for(let i = 0; i<board.length; i++){
    let row = board[i]
    for(let j=0; j<row.length; j++){
      if(board[i][j] === 'P') {
        count++;
      }
    }
  }
  return count;
}