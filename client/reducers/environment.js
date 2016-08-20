export default function environment(state={board:[], selected: {x:3, y:3}, locked: false}, action){
  switch(action.type) {
    case 'RESET' :
      const board = [
        ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
        ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'E', 'P', 'P', 'P'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
        ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
      ]

      return {
        board,
        selected: {x:3, y:3},
        locked: false,
        gameOver: false,
        pegCount: null,
      };

    default:
      return state;
  }
}
