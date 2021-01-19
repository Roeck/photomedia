import React from 'react';
import { combineReducers } from 'redux';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant='h2' align='center'>
                 PhotoMedia
            </Typography>
            <img className={classes.image} src={logo} alt='icon' height='60' />
        </AppBar>

    )
}

export default Navbar;