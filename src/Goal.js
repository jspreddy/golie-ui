import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    padding: '10px',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  avatar: {
    height: '50px',
    width: '50px',
  },
  textContainer: {
    marginLeft: '20px',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '1.3em',
    padding: '13px 0px',
  },
  dateTime: {
    fontSize: '0.8em',
    color: '#a0a0a0',
  }
};

class Goal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let date = new Date();

    return (
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper style={styles.card}>
          <Avatar style={styles.avatar}>{this.props.item.avatar}</Avatar>
          <div style={styles.textContainer}>
            <div style={styles.title}>{this.props.item.title}</div>
            <div style={styles.dateTime}>Last updated: {date.toLocaleDateString("en-US")}</div>
          </div>
        </Paper>
      </Grid>
    );
  }

}

export default Goal;
