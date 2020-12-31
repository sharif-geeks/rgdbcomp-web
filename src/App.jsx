import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  props: {},
  breakpoints: {},
  shape: { borderRadius: 18 },
  palette: { type: "dark" },
  typography: { fontFamily: "Ubuntu" },
});
