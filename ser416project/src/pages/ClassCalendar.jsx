//Library Tools
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
//Material-UI Components
import Typography from "@material-ui/core/Typography";

const ClassCalendar = () => {
	const [value, onChange] = useState(new Date());
  return (
    <div>
      <div>
        <Typography variant="h5">Class Calendar</Typography>
        <div>
	      <Calendar
	        onChange={onChange}
	        value={value}
	      />
    </div>
      </div>
    </div>
  );
};

export default ClassCalendar;
