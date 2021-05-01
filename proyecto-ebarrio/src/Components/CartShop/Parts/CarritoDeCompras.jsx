import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PaymentIcon from "@material-ui/icons/Payment";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Box from "@material-ui/core/Box";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Service from "../../../assets/images/Servicio-de-gasfiteria-a-domicilio.jpg"
import Camion from "../../../assets/images/camion.svg"
<link rel="stylesheet" href="./styles.css" />
import "../Parts/";


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  

const CarritoDeCompras = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };
      
  return (
    <div>
      <Grid container direction="row"  justify="space-around" alignItems="center">
        <AddShoppingCartIcon />
        <PaymentIcon />
        <CheckCircleOutlineOutlinedIcon />
      </Grid>

      <LinearProgress variant="determinate" value={33.3} />

      <Typography variant="h6" color="inherit" align="start" >
        CARRITO DE COMPRAS
      </Typography>
      <Divider />
      
        <div>
          
          <div>
            
            <div>
              <img
                src={Service}
                alt="gasfiteria"
                class=""
              />
            </div>
            
            <div>
              <h5>GASFITERIA EN GENERAL</h5>
              <tr>
                <th scope="col"><strike>S/ 129.90</strike></th>
                <strong scope="col">-28%</strong>
              </tr>

              <p class="text-danger"><strong>S/ 93.90</strong></p>

              <div class="d-flex justify-content-start">
                <div>
                  <img
                    src={Camion}
                    alt="camion"
                    class="rounded-circle"
                  />
                </div>
                <div >
                  <p>Trabajo estimado: 15 de abril</p>
                </div>
              </div>
              <p>Servicio Realizado por Pepe Lucho Casimiro</p>
            </div>
          </div>

          
     <div align="end">
      <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            variant="outlined"
            onClick={handleClick}>
            1
            <KeyboardArrowDownIcon />
          </Button>
      <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            
          >
        
            <MenuItem onClick={handleClose}>2</MenuItem>
            <MenuItem onClick={handleClose}>3</MenuItem>
            <MenuItem onClick={handleClose}>4</MenuItem>
          </Menu>
        </div>
    </div>
    </div>
  );
};

export default CarritoDeCompras;
