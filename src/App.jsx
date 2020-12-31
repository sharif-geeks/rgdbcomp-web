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
  palette: {
    type: "dark",
  },
});
