import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://localhost:3000/";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  shape: { borderRadius: 18 },
  palette: { type: "dark", primary: { main: "#759681" } },
  typography: { fontFamily: "Ubuntu" },
});
