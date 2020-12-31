import styled from "styled-components";
import Details from "~/comps/Details";
import DiagramViz from "~/comps/DiagramViz";
import Header from "~/comps/Header";
import ReportExplorer from "~/comps/ReportExplorer";

export default function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <ReportExplorer />
        <DiagramViz />
        <Details />
      </Body>
    </Container>
  );
}

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;
