import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
      color: '#9FA8DA'
    },
    position: 'absolute',
    right: 20,
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Todos
        </Typography>
        <a
          className={classes.link}
          href="https://github.com/jorgegonzalez/todo"
        >
          <i
            className={classNames(
              'fab',
              'fa-github-alt',
              'fa-2x',
              `${classes.icon}`
            )}
          />
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
