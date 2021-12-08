import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { Home } from './pages/home';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
export default App;
