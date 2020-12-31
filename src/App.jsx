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
  shape: { borderRadius: 18 },
  palette: { type: "dark", primary: { main: "#759681" } },
  typography: { fontFamily: "Ubuntu" },
});
