import { useEffect, useMemo, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Network } from "vis-network/standalone";
import { tablesAtom } from "~/recoil";

function RelModel() {
  const [tables] = useRecoilState(tablesAtom);
  const _container = useRef(null);

  const nodes = useMemo(
    () => tables.map((table, i) => ({ id: i, label: table })),
    [tables]
  );

  useEffect(() => {
    if (_container.current) {
      var network = new Network(
        _container.current,
        { nodes, edges: [{ from: 0, to: 1 }] },
        options
      );
      console.log(network);
    }
  }, [nodes]);

  return <Container ref={_container} />;
}

export default RelModel;

const Container = styled.div`
  height: 100%;
`;

var options = {
  edges: {
    font: {
      size: 14,
    },
    widthConstraint: {
      maximum: 90,
    },
  },
  nodes: {
    shape: "box",
    margin: 10,
    widthConstraint: {
      maximum: 200,
    },
  },
  physics: {
    enabled: true,
  },
};
