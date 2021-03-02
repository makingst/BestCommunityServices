import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ClassCalendar from "./pages/ClassCalendar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

//pages and components
import Home from "./pages/Home";
import Nav from "./components/nav";
import Donations from "./pages/Donations";
import Catering from "./pages/Catering";
import inhome from "./pages/inhome";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flexGrow: 12,
    marginBottom: "20px",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8ba7b0",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  const classes = useStyles();
  const [background, setBackground] = useState("#60ACBD");
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/classcalendar" component={ClassCalendar} />
          <Route path="/donations" component={Donations} />
          <Route path="/catering" component={Catering} />
          <Route path="/inhome" component={inhome} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
