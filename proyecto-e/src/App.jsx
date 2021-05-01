import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {makeStyles,MuiThemeProvider,ThemeProvider} from '@material-ui/core/styles'
import theme from './themeconfig'
import NavBar from './components/NavBar/NavBar';



const useStyle = makeStyles({
    juanito:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    },
    
});

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Typography variant="h1" color="initial">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, et praesentium. Laboriosam esse rerum excepturi, cumque sit ullam sequi non minus ab molestiae? Voluptatum, temporibus? Non temporibus laudantium enim repellat.
      </Typography>
    <div >
      <Button color="secondary">
        Color
      </Button>
      <Button variant="contained" color="primary">
        Con sombra
      </Button>
      <p>Lorem</p>
      <Button variant="contained" color="primary" href="https://google.com">
        Sin sombra
      </Button>
      <Button variant="contained" color="primary" fullWidth>
      fullWidth
      </Button>
      <Button variant="contained" color="primary" size="small">
      small
      </Button>
      <Button variant="contained" color="primary" size="medium">
      medium
      </Button>
      <Button variant="contained" color="primary" size="large">
      large
      </Button>

      <DeleteIcon color="primary" />

      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <IconButton aria-label="Delete" >
        <DeleteIcon color="primary" />
      </IconButton>
      <br/>
      <br/>
      <Typography variant="h1" color="primary" align="center">
        Esto es h1
      </Typography>
      <Typography variant="body1" color="secondary" align = "center" paragraph>
        lorem
      </Typography>
      <Typography variant="body1" color="primary" align = "center" >
        lorem
      </Typography>
      <br/>
      <br/>

      <Button className={classes.juanito}>
        Mi boton personalizado
      </Button>
      <br/>
      <br/>
      <Button variant="contained" color="primary">
        Boton
      </Button>
      <Button variant="contained" color="secondary">
        Boton
      </Button>

    </div>
    </ThemeProvider>
  );
}

export default App;
