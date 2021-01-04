import { Slider, Typography, withStyles } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import { Edge, Network, Node } from "react-vis-network";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { detailsAtom, graphAtom, offsetAtom } from "~/recoil";

const activeColor = "#cd5d7d";
const pallete = [
  "#726a95",
  "#709fb0",
  "#7ABAAB",
  "#C9B69F",
  "#B58494",
  "#746770",
];

const limit = 8;

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const netKey = useMemo(() => "net-" + Math.random() * 1000, [graph, start]);

  const leafCount = useMemo(() => newGraph?.[leafKey]?.length, [
    leafKey,
    newGraph,
  ]);

  const [offset, setOffset] = useRecoilState(offsetAtom);
  useEffect(() => {
    setStart(offset * limit);
  }, [offset]);

  return (
    <Container>
      <Network key={netKey} options={options} style={{ height: "100%" }}>
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
        <PrettoSlider
          valueLabelDisplay="auto"
          valueLabelFormat={(x) => Math.floor(x / limit) + 1}
          onChangeCommitted={(e, x) => {
            setStart(x);
            setOffset(Math.floor(x / limit));
          }}
          defaultValue={offset * limit}
          aria-labelledby="discrete-slider"
          step={limit}
          min={0}
          max={
            newGraph?.[leafKey]
              ? Math.max(0, Math.ceil((leafCount - limit) / limit) * limit)
              : limit
          }
        />
      </SliderRoot>
    </Container>
  );
}

export default GraphModel;

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    position: "relative",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const SliderRoot = styled.div`
  position: absolute;
  bottom: 12px;
  left: 22px;
  max-width: calc(100% - 16px);
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
