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
      <ModelView /* ---- */>
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
          <GraphModel />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <RelModel />
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
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
