import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MaterialTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Tabs(props) {
  return (
    <AppBar position="static">
      <MaterialTabs
        value={props.filter.toLowerCase()}
        onChange={(event, value) => {
          props.onClick(value.toUpperCase());
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Active" value="active" />
        <Tab label="Completed" value="completed" />
      </MaterialTabs>
    </AppBar>
  );
}
