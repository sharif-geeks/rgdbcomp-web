import styled from "styled-components";
import Details from "~/comps/Details";
import DiagramViz from "~/comps/DiagramViz";
import ReportExplorer from "~/comps/ReportExplorer";

export default function Home() {
  return (
    <Container>
      <ReportExplorer />
      <DiagramViz />
      <Details />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;
