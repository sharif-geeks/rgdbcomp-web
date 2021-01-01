import { Paper, Tab, Tabs } from "@material-ui/core";
import { useCallback, useState } from "react";
import styled from "styled-components";
import BackendTab from "~/comps/docs-tabs/BackendTab";
import FrontendTab from "~/comps/docs-tabs/FrontendTab";
import TabPanel from "~/comps/TabPanel";

export default function Docs() {
  const [leftTab, setLeftTab] = useState(0);
  const [rightTab, setRightTab] = useState(0);
  const handleLeftTabChange = useCallback(
    (e, newValue) => setLeftTab(newValue),
    [setLeftTab]
  );
  const handleRightTabChange = useCallback(
    (e, newValue) => setRightTab(newValue),
    [setRightTab]
  );

  return (
    <Container>
      <LeftBox>
        <Paper square>
          <Tabs
            value={leftTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleLeftTabChange}
            variant="fullWidth"
          >
            <Tab label="Backend" />
            <Tab label="Data Collection" />
            <Tab label="Models" />
          </Tabs>
        </Paper>
        <TabPanel value={leftTab} index={0}>
          <BackendTab />
        </TabPanel>
        <TabPanel value={leftTab} index={1}>
          tab2
        </TabPanel>
        <TabPanel value={leftTab} index={1}>
          tab2
        </TabPanel>
      </LeftBox>
      <RightBox>
        <Paper square>
          <Tabs
            value={rightTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleRightTabChange}
            variant="fullWidth"
          >
            <Tab label="Frontend" />
            <Tab label="DevOps" />
          </Tabs>
        </Paper>
        <TabPanel value={rightTab} index={0}>
          <FrontendTab />
        </TabPanel>
        <TabPanel value={rightTab} index={1}>
          tab4
        </TabPanel>
      </RightBox>
    </Container>
  );
}

const RightBox = styled.div`
  flex: 0 0 calc(50% - 2px);
  background-color: #fff5;
`;

const LeftBox = styled.div`
  background-color: #fff5;
  flex: 0 0 calc(50% - 2px);
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  justify-content: space-between;
  margin: 0 22px;
`;
