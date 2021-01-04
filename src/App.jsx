import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { accentColor } from "./assets/colors";
import PageLayout from "./comps/PageLayout";
import Docs from "./pages/Docs";
import Home from "./pages/Home";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://localhost:3000/";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PageLayout>
            <Switch>
              <Route path="/docs">
                <Docs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </PageLayout>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

const theme = createMuiTheme({
  shape: { borderRadius: 18 },
  palette: { type: "dark", primary: { main: accentColor } },
  typography: { fontFamily: "Ubuntu" },
  props: {
    MuiTextField: {
      style: {
        backgroundColor: "rgba(0, 0, 0, 0.333)",
        borderRadius: "18px 18px 0 0",
      },
    },
    MuiFormLabel: {
      style: { padding: "8px 0 0 12px" },
    },
    MuiInputBase: {
      style: { padding: "8px 4px 8px 12px" },
    },
    MuiInputAdornment: {
      style: { transform: "translateY(-8px)" },
    },
  },
});
