import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import theme from "./global/theme";
import { Home } from "./pages/home";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
export default App;
