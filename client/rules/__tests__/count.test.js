import expect from 'expect';
import { countPegs } from '../index.js'

describe('countPegs', () => {
  it('should give the correct peg count', () => {
    const testBoard = [
      ['X', 'P', 'P'],
      ['P', 'P', 'P'],
      ['X', 'E', 'P'],
      ['X', 'E', 'X'],
    ]

    expect(countPegs(testBoard)).toEqual(6);
  })
});