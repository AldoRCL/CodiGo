import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core' 
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar >
              <Toolbar>
                  <IconButton >
                  <MenuIcon />
                  </IconButton>
                  
                <Typography variant="h6">
                  bluuwer
                </Typography>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}>

            </div>
        </div>
    )
}

export default NavBar
