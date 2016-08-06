import moves from '../game';
import expect from 'expect';

describe('moves', () => {
  describe('MOVE_UP', () => {
    describe('when in edge', () => {
      it('should give correct new state for left side', () => {
        const state = {selected: {x: 1, y: 4}};
        const action = {type: 'MOVE_UP'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 1, y: 2}})
      });

      it('should give correct new state for right', () => {
        const state = {selected: {x: 6, y: 4}};
        const action = {type: 'MOVE_UP'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 6, y: 2}})
      });

      it('should give correct new state for middle', () => {
        const state = {selected: {x: 3, y: 6}};
        const action = {type: 'MOVE_UP'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 3, y: 0}})
      });
    });

    describe('when in middle', () => {
      it('should give correct new state', () => {
        const state = {selected: {x: 3, y: 3}};
        const action = {type: 'MOVE_UP'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 3, y: 4}})
      });
    });
  });

  describe('MOVE_DOWN', () => {
    describe('when in edge', () => {
      it('should give correct new state for left side', () => {
        const state = {selected: {x: 1, y: 2}};
        const action = {type: 'MOVE_DOWN'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 1, y: 4}})
      });

      it('should give correct new state for right', () => {
        const state = {selected: {x: 6, y: 2}};
        const action = {type: 'MOVE_DOWN'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 6, y: 4}})
      });

      it('should give correct new state for middle', () => {
        const state = {selected: {x: 3, y: 0}};
        const action = {type: 'MOVE_DOWN'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 3, y: 6}})
      });
    });

    describe('when in middle', () => {
      it('should give correct new state', () => {
        const state = {selected: {x: 3, y: 3}};
        const action = {type: 'MOVE_DOWN'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 3, y: 2}})
      });
    });
  });

  describe('MOVE_RIGHT', () => {
    describe('when in edge', () => {
      it('should give correct new state for lower side', () => {
        const state = {selected: {x: 4, y: 0}};
        const action = {type: 'MOVE_RIGHT'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 2, y: 0}})
      });

      it('should give correct new state for upper', () => {
        const state = {selected: {x: 4, y: 5}};
        const action = {type: 'MOVE_RIGHT'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 2, y: 5}})
      });

      it('should give correct new state for middle', () => {
        const state = {selected: {x: 6, y: 3}};
        const action = {type: 'MOVE_RIGHT'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 0, y: 3}})
      });
    });

    describe('when in middle', () => {
      it('should give correct new state', () => {
        const state = {selected: {x: 3, y: 3}};
        const action = {type: 'MOVE_RIGHT'};
        const newState = moves(state, action);

        expect(newState).toEqual({selected: {x: 4, y: 3}})
      });
    });

    describe('MOVE_LEFT', () => {
      describe('when in edge', () => {
        it('should give correct new state for lower side', () => {
          const state = {selected: {x: 2, y: 0}};
          const action = {type: 'MOVE_LEFT'};
          const newState = moves(state, action);

          expect(newState).toEqual({selected: {x: 4, y: 0}})
        });

        it('should give correct new state for upper', () => {
          const state = {selected: {x: 2, y: 6}};
          const action = {type: 'MOVE_LEFT'};
          const newState = moves(state, action);

          expect(newState).toEqual({selected: {x: 4, y: 6}})
        });

        it('should give correct new state for middle', () => {
          const state = {selected: {x: 0, y: 3}};
          const action = {type: 'MOVE_LEFT'};
          const newState = moves(state, action);

          expect(newState).toEqual({selected: {x: 6, y: 3}})
        });
      });

      describe('when in middle', () => {
        it('should give correct new state', () => {
          const state = {selected: {x: 3, y: 3}};
          const action = {type: 'MOVE_LEFT'};
          const newState = moves(state, action);

          expect(newState).toEqual({selected: {x: 2, y: 3}})
        });
      });
    });
  });
});