import { ThemeProvider } from '@mui/material';
import './App.css';
import {theme} from './Theme/index'
import { Container } from './components/Container';


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Container/>
    </ThemeProvider>
      
    </>
  );
}

export default App;