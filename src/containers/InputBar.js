import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import uuidv4 from 'uuid/v4';

import { createTodo } from '../lib/actions';

const styles = theme => ({
  input: {
    padding: '10px 20px 10px 20px',
    margin: '0 auto',
    width: '65%'
  },
  form: {
    borderRadius: '5px 5px 0 0',
    margin: theme.spacing.unit
  }
});

class InputBar extends Component {
  state = {
    value: ''
  };

  handleChange = event => this.setState({ value: event.target.value });
  handleSubmit = () => this.setState({ value: '' });

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.input}
        onSubmit={event => {
          event.preventDefault();
          this.props.dispatch(createTodo(this.state.value.trim(), uuidv4()));
          this.handleSubmit(event);
        }}
      >
        <TextField
          color="secondary"
          label="Todo"
          className={classes.form}
          value={this.state.value}
          onChange={this.handleChange}
          margin="normal"
          autoFocus
        />
        <Button
          variant="raised"
          size="small"
          color="secondary"
          onClick={event => {
            event.preventDefault();
            this.props.dispatch(createTodo(this.state.value.trim(), uuidv4()));
            this.handleSubmit(event);
          }}
        >
          Add Todo
        </Button>
      </form>
    );
  }
}

export default connect()(withStyles(styles)(InputBar));
