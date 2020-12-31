import { useState } from "react";
import GraphModel from "./GraphModel";
import RelModel from "./RelModel";
import styled from "styled-components";
import Details from "../Details";

function DiagramViz() {
  const [isGraph, toggle] = useState(false);

  return (
    <Container>
      <ToggleButton onClick={toggle} />
      <ModelView /* ---- */>
        {isGraph ? <GraphModel /> : <RelModel />}
      </ModelView>
    </Container>
  );
}

export default DiagramViz;

const ToggleButton = styled.button`
  position: absolute;
  display: none;
`;

const ModelView = styled.div`
  flex: 1;
  background-color: #fff5;
  border-radius: 22px 0 0 22px;
`;

const Container = styled.div`
  flex: 1;
  padding: 12px 0 12px 22px;
  display: flex;
  flex-direction: row;
  border-top-right-radius: 48px;
`;
