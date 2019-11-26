import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioCard from 'audiocard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Coming soon!</h1>
          <AudioCard
            art="https://seekjustice.fm/art300.jpg"
            source="https://dts.podtrac.com/redirect.mp3/seekjustice.fm/media/001.mp3"
          />
      </div>
    </div>
  );
}

export default App;
