import { Slider, Typography } from "@material-ui/core";
import { useMemo, useState } from "react";
import { Edge, Network, Node } from "react-vis-network";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { detailsAtom, graphAtom } from "~/recoil";

const activeColor = "#cd5d7d";
const pallete = [
  "#726a95",
  "#709fb0",
  "#7ABAAB",
  "#C9B69F",
  "#B58494",
  "#746770",
];

const limit = 10;

function GraphModel() {
  const [start, setStart] = useState(0);
  const [graph] = useRecoilState(graphAtom);
  const [info] = useRecoilState(detailsAtom);

  // TODO use wasm for this - expensive
  const { keys, newGraph } = useMemo(() => {
    let keys = [];
    let newGraph = {};

    graph.forEach((item) => {
      const key = item.node.split("/")[0];
      if (!keys.includes(key)) {
        keys.push(key);
        newGraph[key] = [];
      }
      newGraph[key].push(item);
    });

    return { keys, newGraph };
  }, [graph]);

  const leafKey = useMemo(() => keys[keys.length - 1], [keys]);

  const smallGraph = useMemo(() => {
    let arr = [];

    const newGraphKeys = Object.keys(newGraph);
    newGraphKeys.forEach((key, i) => {
      const items = newGraph[key];
      arr =
        key !== leafKey
          ? [...arr, ...items]
          : [
              ...arr,
              ...items.slice(start, Math.min(items.length, start + limit)),
            ];
    });

    return arr;
  }, [newGraph, leafKey, start]);

  const nodes = useMemo(
    () =>
      smallGraph.map(({ node }) => ({
        id: node,
        label: node,
        color:
          info?._id === node
            ? activeColor
            : pallete[keys.indexOf(node.split("/")[0])],
      })),
    [info?._id, keys, smallGraph]
  );

  const edges = useMemo(
    () =>
      smallGraph
        .filter((item) => item.edge)
        .map(({ edge: { from, to } }, i) => ({ from, to, id: "edge-" + i })),
    [smallGraph]
  );

  console.log({ smallGraph, nodes });

  return (
    <Container>
      <Network options={options} style={{ height: "100%" }}>
        {nodes.map((node, i) => (
          <Node {...node} key={i} />
        ))}
        {edges.map((edge, i) => (
          <Edge {...edge} key={i} />
        ))}
      </Network>
      <SliderRoot>
        <Typography id="discrete-slider" gutterBottom>
          Offset of First Leaf Nodes
        </Typography>
        <Slider
          defaultValue={0}
          getAriaValueText={(v) => `${v} items`}
          onChangeCommitted={(e, v) => setStart(v)}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={limit}
          marks
          min={0}
          max={
            newGraph?.[leafKey]
              ? Math.max(
                  newGraph[leafKey].length,
                  newGraph[leafKey].length - limit
                )
              : 10
          }
        />
      </SliderRoot>
    </Container>
  );
}

export default GraphModel;

const SliderRoot = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  max-width: 300px;
`;

const Container = styled.div`
  height: 100%;
  cursor: url("assets/round-cursor.cur") 39 39, auto;
  overflow: hidden;
  position: relative;
`;

var options = {
  edges: {},
  nodes: { font: { color: "#000" } },
  physics: {
    enabled: true,
  },
};
