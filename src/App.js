import React from 'react';
import './App.css';
import Puzzle from './components/puzzle/puzzle.component.jsx';


class App extends React.Component {

  render()
  {
    return (
      
      <div className="App">
        <h1>Sudoku Solver</h1>
        <p>Create your own puzzle and press 'Solve'</p>
        <Puzzle />               
      </div>  
      
    );
  }
  
}

export default App;
