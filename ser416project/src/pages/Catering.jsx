
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//Material-UI Components
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

 const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    marginLeft: "30px",
  },
  name: {
  	marginTop: "10px",
  	marginBottom: "10px",
  },
}));

const Catering = () => {
	const classes = useStyles();
  return (
    <div>

      <div className={classes.margin}>

        <Typography variant="h4">Catering</Typography>
        <form noValidate autoComplete="off">
  			

        <Grid container direction="column" >
          	
            <Grid item xs={6} className={classes.name}>
              <Typography variant="subtitle1" >Book Catering</Typography> 
            </Grid>
            
            <Grid item xs={6} className={classes.name}>
   
            	<form className={classes.container} noValidate>
					  <TextField
					    id="date"
					    label="Date"
					    type="date"
					    defaultValue="2017-05-24"
					    className={classes.textField}
					    InputLabelProps={{
					      shrink: true,
					    }}
					  />
				</form>

			</Grid>

			<Grid item xs={6} className={classes.name}>
				<InputLabel id="label">Select Menu</InputLabel>
				<Select labelId="label" id="select" value="20">
				  <MenuItem>Spaghetti</MenuItem>
				  <MenuItem>Grilled Chicken</MenuItem>
				</Select>
			</Grid>

			<Grid item xs={6} className={classes.name}>
                <TextField id="outlined-basic" label="Name" variant="outlined"/>
            
            </Grid>

            <Grid item xs={6} className={classes.name}>
              <TextField id="outlined-basic" label="Email" variant="outlined"/>
          </Grid>

          <Grid item xs={6} className={classes.name}>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          </Grid>

          <Grid item xs={6} className={classes.name}>
              <TextField id="outlined-basic" label="Number of Guests" variant="outlined"/>
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

export default Catering;
