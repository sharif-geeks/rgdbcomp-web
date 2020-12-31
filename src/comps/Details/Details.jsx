import { Paper, Tab, Tabs } from "@material-ui/core";
import styled from "styled-components";

export default function Details() {
  return (
    <Container>
      <Wrapper>
        <Paper square>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            style={{ borderRadius: [20, 20, 20, 20] }}
            centered
            variant="fullWidth"

          >
            <Tab label="Details" />
          </Tabs>
        </Paper>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  background-color: #fff5;
  height: 100%;
  border-radius: 0 22px 22px 0;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 0 0 320px;
  padding: 12px 22px 12px 4px;
`;
