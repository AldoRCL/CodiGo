import React from "react";
import {fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    //marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      //marginLeft: theme.spacing(3),
      width: 250,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div >
      
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" >
            LOGO
          </Typography>
          <div style={{ width: '100%' }}>
          <Box display="flex" >

          <Box p={1} flexGrow={1} order={1} ml>
          <Box display="flex" flexDirection="row"   >
        <Box >
        <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            Restaurantes
          </Button>
          
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Comercio</MenuItem>
            <MenuItem onClick={handleClose}>Servicios</MenuItem>
            <MenuItem onClick={handleClose}>Otros</MenuItem>
          </Menu>
        </Box>
        <Box >
        <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Box>
        
      </Box>
        </Box>
        <Box p={1} order={2}>
        <Button color="inherit">Ingresar</Button>
        </Box>
        <Box p={1} order={3}>
          <Button color="inherit" >Registrarme</Button>
        </Box>
          </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default NavBar