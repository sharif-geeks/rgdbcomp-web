import { Paper, Tab, Tabs } from "@material-ui/core";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { rgdbAtom } from "~/recoil";
import TabPanel from "../TabPanel";
import GraphModel from "./GraphModel";
import RelModel from "./RelModel";

export default function DiagramViz() {
  const [tab, setTab] = useRecoilState(rgdbAtom);
  const handleTabChange = useCallback((e, newValue) => setTab(newValue), [
    setTab,
  ]);

  return (
    <Container>
      <ModelView>
        <Paper square>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
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
