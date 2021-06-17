import React from 'react';
import './App.css';
import Ellipsis from './components/Ellipsis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TalentSoft 
        </a>
      </header>
      <Ellipsis text={'Hello!!!'}/>
    </div>
  );
}

export default App;
