import React, { useEffect } from 'react';
import GameCanvas from './components/GameCanvas';
import UI from './components/UI';
import gameStateMachine from './services/stateMachine';

const App = () => {
  useEffect(() => {
    gameStateMachine.handle('start');
  }, []);

  return (
    <div className="App">
      <GameCanvas />
      <UI />

    </div>
  );
};

export default App;