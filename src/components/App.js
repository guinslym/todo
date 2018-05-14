import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import indigo from '@material-ui/core/colors/indigo';
import Paper from '@material-ui/core/Paper';

import Header from './Header';
import FilterTabs from '../containers/FilterTabs';
import InputBar from '../containers/InputBar';
import TodoList from '../containers/TodoList';
import UndoRedo from '../containers/UndoRedo';

const theme = createMuiTheme({
  palette: {
    primary: indigo
  }
});

const styles = {
  paper: {
    maxWidth: 480,
    marginTop: 26,
    marginBottom: 26,
    margin: '0 auto'
  }
};

function TodoApp(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <UndoRedo />
      <Paper className={classes.paper}>
        <FilterTabs />
        <InputBar />
        <TodoList />
      </Paper>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(TodoApp);
