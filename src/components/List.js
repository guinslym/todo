import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialList from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Todo from '../containers/Todo';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10
  },
  count: {
    padding: '10px 0 10px 28px'
  }
});

function ButtonGroup({ classes, disabled, toggleAll, clear }) {
  return (
    <div className={classes.buttonGroup}>
      <Button
        disabled={disabled}
        className={classes.button}
        color="primary"
        onClick={() => toggleAll(true)}
      >
        Check All
      </Button>
      <Button
        disabled={disabled}
        className={classes.button}
        color="primary"
        onClick={() => toggleAll(false)}
      >
        Uncheck All
      </Button>
      <Button
        disabled={disabled}
        className={classes.button}
        color="primary"
        onClick={() => clear()}
      >
        Clear COMPLETED
      </Button>
    </div>
  );
}

function List({ classes, todos, toggleAll, clear }) {
  return (
    <MaterialList>
      <ButtonGroup
        disabled={todos.length < 1}
        classes={classes}
        toggleAll={toggleAll}
        clear={clear}
      />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
      {todos.length > 0 ? (
        <Typography className={classes.count} color="secondary">
          {todos.length} todos left
        </Typography>
      ) : null}
    </MaterialList>
  );
}

export default withStyles(styles)(List);
