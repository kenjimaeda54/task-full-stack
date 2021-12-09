import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import theme from "./global/theme";
import { RegisterTask } from "./pages/registerTask";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RegisterTask />
    </ThemeProvider>
  );
}
export default App;
