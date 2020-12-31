import { useState } from "react";
import GraphModel from "./GraphModel";
import RelModel from "./RelModel";
import styled from 'styled-components'

function DiagramViz() {
  const [isGraph, toggle] = useState(false);

  return (
    <Container>
      <ToggleButton onClick={toggle} />
      {isGraph ? <GraphModel /> : <RelModel />}
    </Container>
  );
}

export default DiagramViz;

const ToggleButton = styled.button``;

const Container = styled.div``