import React from 'react';
import Grid from '@material-ui/core/Grid';
import Goal from './Goal.js';

class GoalList extends React.Component {
  constructor(props){
    super(props);
  }

  getList(list){
    return (
      list.map( a => <Goal item={a} /> )
    );
  }

  render(){
    return (
      <Grid container spacing={8}>
        {this.getList(this.props.goals)}
      </Grid>
    );
  }
}

export default GoalList;
