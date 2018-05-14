import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Item extends Component {
  state = {
    open: false,
    value: this.props.text
  };

  handleChange = event => this.setState({ value: event.target.value });

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <ListItem
          key={this.props.id}
          role={undefined}
          dense
          button
          onClick={() => this.props.toggleTodo(this.props.id)}
          className=""
        >
          <Checkbox
            checked={this.props.completed}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={this.props.text} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={this.handleClickOpen}>
              <Edit />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => this.props.deleteTodo(this.props.id)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <Dialog
          open={this.state.open}
          onChange={this.handleChange}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form
            onSubmit={event => {
              event.preventDefault();
              this.props.updateTodo(this.props.id, this.state.value);
              this.handleClose();
            }}
          >
            <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Update"
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions disableActionSpacing>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  this.props.updateTodo(this.props.id, this.state.value);
                  this.handleClose();
                }}
                color="primary"
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
