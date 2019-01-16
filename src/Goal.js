import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';


const styles = {
  card: {
    padding: '10px',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  textFlex: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 8,
    justifyContent: 'center',
  },
  textContainer:{
    paddingLeft: '12px'
  },
  title: {
    fontSize: '1.4em',
  },
  dateTime: {
    fontSize: '0.8em',
    color: '#a0a0a0',
    marginTop: '2px',
  },
  countContainer:{
    fontSize: 30,
    color: '#e0e0e0',
    margin: 'auto',
  },
  button: {
    height:'100px',
    minWidth: '20px',
  },
  icon: {
    margin: 2,
    fontSize: 40,
    color: '#e0e0e0',
  },
};

class Goal extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let date = new Date();

    return (
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper style={styles.card}>
          <div style={styles.textFlex}>
            <div style={styles.textContainer}>
              <div style={styles.title}>{this.props.item.title}</div>
              <div style={styles.dateTime}>Last updated: <b>{date.toLocaleDateString()}</b></div>
            </div>
          </div>
          <div style={styles.countContainer}>
            {this.props.item.count}
          </div>
          <IconButton style={styles.button} aria-label="Delete">
            <Icon color="primary" style={styles.icon}>
              add
            </Icon>
          </IconButton>
        </Paper>
      </Grid>
    );
  }

}

export default Goal;
