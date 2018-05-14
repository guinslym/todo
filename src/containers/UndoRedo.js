import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

const styles = theme => ({
  historyButtons: {
    position: 'absolute',
    top: 84,
    left: 24
  },
  button: {
    margin: theme.spacing.unit
  }
});

const Buttons = ({ canUndo, canRedo, onUndo, onRedo, classes }) => (
  <div className={classes.historyButtons}>
    <Button
      className={classes.button}
      mini
      variant="fab"
      color="secondary"
      aria-label="undo"
      onClick={onUndo}
      disabled={!canUndo}
    >
      <UndoIcon />
    </Button>
    <Button
      className={classes.button}
      mini
      variant="fab"
      color="secondary"
      aria-label="redo"
      onClick={onRedo}
      disabled={!canRedo}
    >
      <RedoIcon />
    </Button>
  </div>
);

const mapStateToProps = state => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
});

const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo())
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Buttons)
);
