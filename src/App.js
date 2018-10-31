import React, { Component } from 'react';
import './App.css';

const data = [
  {
    key: "Q",
    description: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    description: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    key: "E",
    description: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    key: "A",
    description: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    key: "S",
    description: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
   {
    key: "D",
    description: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "Z",
    description: "Kick and Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    description: "Hi Hat 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "C",
    description: "Hi Hat 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

class App extends Component {
  state = {
    currentKey: ""
  }

  playAudio(e) {
    let key = e.key.toUpperCase();
    if (key === "Y") key = "Z";
    
    if (data.filter(entry => entry.key === key).length > 0) {
      const audio = document.getElementById(key);

      audio.load();
      audio.play();
      
      this.setState({
        currentKey: data.filter(entry => entry.key === key)[0].description
      })
    }
  }
  
  componentDidMount() {
    document.addEventListener("keydown", e => this.playAudio(e));
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", e => this.playAudio(e));
  }
  
  render() {
    const buttons = data.map(e => {
      return (
        <button 
          key={e.key}
          onClick={() => this.playAudio(e)}
          className="drum-pad"
          id={e.description} >
            {e.key}
            <audio 
              className="clip"
              id={e.key}
              src={e.src} >
            </audio>
        </button>
      )
    })
  
    return (
      <div id="drum-machine">
        <div id="display">
          {this.state.currentKey}
        </div>
        <div id="button-container">
          {buttons}
        </div>
      </div>
    );
  }
}

export default App;