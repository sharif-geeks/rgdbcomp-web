import { useCallback, useState } from "react";
import GraphModel from "./GraphModel";
import RelModel from "./RelModel";
import styled from "styled-components";
import {
  Box,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

export default function DiagramViz() {
  const classes = useStyles();

  const [tab, setTab] = useState(0);
  const handleTabChange = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  return (
    <Container>
      <ModelView>
        <Paper square>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
            className={classes.tabs}
            style={{ borderRadius: [20, 20, 20, 20] }}
            variant="fullWidth"
          >
            <Tab label="Relational Model" />
            <Tab label="Graph Model" />
          </Tabs>
        </Paper>
        <TabPanel value={tab} index={0}>
          <RelModel />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <GraphModel />
        </TabPanel>
      </ModelView>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  tabs: {},
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      style={{ height: "100%" }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const ModelView = styled.div`
  flex: 1;
  background-color: #fff5;
  border-radius: 22px 0 0 22px;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 1;
  padding: 12px 0 12px 22px;
  display: flex;
  flex-direction: row;
`;
