import React from "react";
import CheckPay from "../CheckPay/CheckPay";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CarritoDeCompras from "./Parts/CarritoDeCompras";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

const CartShop = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1} >
        <Grid item xs={9} >
          <Box >
            <CarritoDeCompras />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>Resumen de compra</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartShop;
