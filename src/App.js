import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './resources/App.css';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 10,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#Golie</h1>
        </header>
        <div className={styles.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={styles.paper}>
                <Avatar>SJ</Avatar>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
