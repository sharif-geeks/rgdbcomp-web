import { useMemo } from "react";
import { Edge, Network, Node } from "react-vis-network";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { graphAtom } from "~/recoil";

const p = ["#7ABAAB", "#C9B69F", "#B58494", "#746770"];
const pallete = ["#726a95", "#709fb0", "#7ABAAB", "#C9B69F", "#B58494"];

function GraphModel() {
  const [graph] = useRecoilState(graphAtom);

  const keys = useMemo(() => {
    let list = [];
    graph.forEach(({ node }) => {
      const key = node.split("/")[0];
      if (!list.includes(key)) list = [...list, key];
    });
    return list;
  }, [graph]);

  const nodes = useMemo(
    () =>
      graph.map(({ node }) => ({
        id: node,
        label: node,
        color: pallete[keys.indexOf(node.split("/")[0])],
      })),
    [graph, keys]
  );

  const edges = useMemo(
    () =>
      graph.filter((item) => item.from).map(({ from, to }) => ({ from, to })),
    [graph]
  );

  console.log(nodes, edges, keys);

  return (
    <Container options={options}>
      {nodes.map((node, i) => (
        <Node {...node} key={i} />
      ))}
      {edges.map((edge, i) => (
        <Edge {...edge} id={"edge-" + i} key={i} />
      ))}
    </Container>
  );
}

export default GraphModel;

const Container = styled(Network)`
  height: 100%;
  cursor: url("assets/round-cursor.cur") 39 39, auto;
`;

var options = {
  edges: {},
  nodes: {},
  physics: {
    enabled: true,
  },
};
