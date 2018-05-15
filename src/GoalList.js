import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Goal from './Goal.js';

class GoalList extends Component {
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
