import Player from './components/Player';
import GameBoard from './components/Gameboard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;