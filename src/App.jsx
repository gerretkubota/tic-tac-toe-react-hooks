import React from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';

import '../public/styles/main.css';

const App = () => (
  <div className="app column column-center">
    <Header title="Tic Tac Toe" />
    <Board />
  </div>
);

export default App;
