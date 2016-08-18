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
      };

    case '6PURGE' :
      const board6p = [
        ['X', 'X', 'E', 'E', 'E', 'X', 'X'],
        ['X', 'X', 'E', 'E', 'E', 'X', 'X'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'P', 'E', 'E', 'E', 'E'],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
        ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
      ]

      return {
        board: board6p,
        selected: {x:3, y:3},
        locked: false,
        gameOver: false,
      };

    default:
      return state;
  }
}

/**

6 purge
=======

[
  ['X', 'X', 'E', 'E', 'E', 'X', 'X'],
  ['X', 'X', 'E', 'E', 'E', 'X', 'X'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'P', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
]

[
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['P', 'P', 'P', 'E', 'P', 'P', 'P'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
]

**/