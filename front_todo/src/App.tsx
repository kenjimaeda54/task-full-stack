import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import theme from "./global/theme";
import { AppRoutes } from "./router";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}
export default App;
