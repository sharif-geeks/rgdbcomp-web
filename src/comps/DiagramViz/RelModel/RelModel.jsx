import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Edge, Network, Node } from "react-vis-network";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dataAtom } from "~/recoil";
import Decorator from "./Decorator";

function RelModel() {
  const [{ tables }] = useRecoilState(dataAtom);
  const [tableInfos, setTableInfos] = useState([]);

  useEffect(() => {
    Promise.all(
      tables.map((table) =>
        axios
          .get("/relation/tableinfo/" + table)
          .then((res) => res.data)
          .catch(console.log)
      )
    ).then((values) => setTableInfos(values));
  }, [tables]);

  const nodes = useMemo(
    () =>
      tableInfos.map((cols) => ({
        decorator: () => <Decorator cols={cols} />,
      })),
    [tableInfos]
  );

  const edges = useMemo(
    () => [
      { from: "node-0", to: "node-1" },
      { from: "node-1", to: "node-2" },
    ],
    []
  );

  return (
    <Container options={options}>
      {nodes.map((node, i) => (
        <Node {...node} id={"node-" + i} key={i} />
      ))}
      {edges.map((edge, i) => (
        <Edge {...edge} id={"edge-" + i} key={i} />
      ))}
    </Container>
  );
}

export default RelModel;

const Container = styled(Network)`
  height: 100%;
  cursor: url("assets/round-cursor.cur") 39 39, auto;
`;

var options = {
  edges: {
    color: "#fff",
    font: {
      size: 14,
    },
    widthConstraint: {
      maximum: 90,
    },
    width: 2,
  },
  nodes: {
    shape: "box",
    color: "#fff",
    widthConstraint: {
      minimum: 280,
    },
    heightConstraint: {
      minimum: 200,
    },
  },
  physics: {
    enabled: true,
    barnesHut: {
      avoidOverlap: 1,
      springLength: 100,
      gravitationalConstant: -5000,
      springConstant: 0.01,
      centralGravity: 1,
      damping: 0.2,
    },
    solver: "barnesHut",
  },
};
