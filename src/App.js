import React from "react";
import useStyles from "./style";
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header/Header';
import Places from "./components/Places/Places";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Places />
    </div>
  );
};

export default App;
