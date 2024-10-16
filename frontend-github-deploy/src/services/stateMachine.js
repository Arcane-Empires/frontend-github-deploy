import machina from 'machina';

const gameStateMachine = new machina.Fsm({
  initialize: function () {
    console.log('Game State Machine Initialized');
  },
  namespace: 'game',
  initialState: 'uninitialized',
  states: {
    uninitialized: {
      '*': function () {
        this.deferUntilTransition();
      },
      start: 'playing'
    },
    playing: {
      start: function () {
        console.log('Game Started');
      },
      stop: 'stopped'
    },
    stopped: {
      start: function () {
        this.transition('playing');
      }
    }
  }
});

export default gameStateMachine;