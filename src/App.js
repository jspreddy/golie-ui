import React, { Component } from 'react';
import './resources/App.css';
import GoalList from './GoalList.js';


const styles = {
  goalContainer: {padding: '8px', overflowX:'hidden'}
};

const goals= [
  {
    avatar: "AR",
    title: "Horizontal Lat Row",
  },
  {
    avatar: "AB",
    title: "Back Extension",
  },
  {
    avatar: "BA",
    title: "Front Row",
  },
  {
    avatar: "CH",
    title: "Chest Forward",
  },
  {
    avatar: "CH",
    title: "MTS Incline Press",
  },
  {
    avatar: "CH",
    title: "Butterfly",
  },
  {
    avatar: "LE",
    title: "Leg Curl",
  },

];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#Golie</h1>
        </header>
        <div style={styles.goalContainer}>
          <GoalList goals={goals} />
        </div>
      </div>
    );
  }
}

export default App;
