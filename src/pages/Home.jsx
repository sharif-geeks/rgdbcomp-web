import DiagramViz from "../comps/DiagramViz";
import Header from "../comps/Header";
import styled from "styled-components";
import ReportExplorer from "../comps/ReportExplorer";
import Details from '../comps/Details'

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
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
