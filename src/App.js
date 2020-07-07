import React from 'react';

import Metronome from "./Metronome";
import Visualization from "./Visualization";
import Tabs from './Tabs';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Metronome">
          <Metronome />
        </div>
        <div label="Tuner">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Visualization">
          <Visualization />
        </div>
      </Tabs>
      </header>
    </div>
  );
}

export default App;
