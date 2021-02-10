import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/nav';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
    	main: '#8ba7b0',
    },
    secondary: {
    	main: '#FFFFFF',
    },
  },
});

function App() {
  return (
  	<ThemeProvider theme={theme}>
  
    <div className="App">

      <Nav />
      <Home />

      	
      
        
    </div>

    </ThemeProvider>
  );
}

export default App;
