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
    count: 3,
  },
  {
    avatar: "AB",
    title: "Back Extension",
    count: 34,
  },
  {
    avatar: "BA",
    title: "Front Row",
    count: 67,
  },
  {
    avatar: "CH",
    title: "Chest Forward",
    count: 58,
  },
  {
    avatar: "CH",
    title: "MTS Incline Press",
    count: 24,
  },
  {
    avatar: "CH",
    title: "Butterfly",
    count: 985,
  },
  {
    avatar: "LE",
    title: "Leg Curl",
    count: 45,
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
