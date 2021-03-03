//Library Tools
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
//Material-UI Components
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    marginLeft: "30px",
  },
  name: {
  	marginTop: "10px",
  	marginBottom: "10px",
  },
}));

const ClassCalendar = () => {
	const classes = useStyles();
	const [value, onChange] = useState(new Date());
  return (
    <div className={classes.margin}>

        <Typography variant="h5">Class Calendar</Typography>
        <div>
	      <Calendar
	        onChange={onChange}
	        value={value}
	        
	      />
	      <Typography variant="h7">Select a class to view class details</Typography>
    </div>
      </div>
   
  );
};

export default ClassCalendar;
