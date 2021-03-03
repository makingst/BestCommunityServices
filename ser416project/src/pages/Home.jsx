//Library Tools
import { Link } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Material-UI Components
import Typography from "@material-ui/core/Typography";
 const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    marginLeft: "150px",
  },
  name: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.margin}>
        <Typography variant="h5" className={classes.name}>Home Page</Typography>
        <img
          src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fa-7ng0Wicx7F2ZyFVuoAyQ%252FGettyImages-655976164.jpg&width=1200&quality=80"
          alt="art class"
          height="300px"
        />
        <h4> Take our Weekly Art Class with Sara!</h4>
      </div>
    </div>
  );
};

export default Home;
