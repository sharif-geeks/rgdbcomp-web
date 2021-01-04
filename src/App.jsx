import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { accentColor } from "./assets/colors";
import PageLayout from "./comps/PageLayout";
import Docs from "./pages/Docs";
import Home from "./pages/Home";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "http://45.82.138.169:3000/"
    : "http://127.0.0.1:3000/";

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
});
