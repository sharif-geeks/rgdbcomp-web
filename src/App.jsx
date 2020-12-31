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

const colors = [
  "75A29A 2E2A2D 67545D F3F3E3 E5D6B6",
  `463E3E
759681
8B9A77
CFCBAE
BF5A40`,
];
