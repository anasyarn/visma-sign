import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  }
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
