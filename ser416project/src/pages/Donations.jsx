//Library Tools
import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//Material-UI Components
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
  const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  name: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));
const Donations = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.margin}>
        <Typography variant="h5">Donations</Typography>
        <form noValidate autoComplete="off">
  			

        <Grid container direction="column">
          
            <Grid item xs={6} className={classes.name}>
              <Typography variant="subtitle1" >Make a Donation</Typography> 
            </Grid>
            <Grid item xs={6} className={classes.name}>
               <FormControl fullWidth className={classes.margin}>
              
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
              </FormControl>
            </Grid>
            <Grid item xs={6} className={classes.name}>
              <TextField id="outlined-basic" label="Card Number" variant="outlined"/>
          </Grid>
             <Grid item xs={6} className={classes.name}>
            <TextField id="outlined-basic" label="Name on Card" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.name}>
              <TextField id="outlined-basic" label="Exp Date" variant="outlined"/>
          </Grid>
          <Grid item xs={6} className={classes.name}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
       </Grid>
		</form>
      </div>
    </div>
  );
};

export default Donations;
