import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return ( 
    <Container maxWidth='lg'>
      <Navbar />
    
    </Container>
  );
};

export default App;
