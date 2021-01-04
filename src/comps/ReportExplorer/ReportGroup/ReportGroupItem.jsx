import TreeItem from "@material-ui/lab/TreeItem";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  graphAtom,
  idsAtom,
  offsetAtom,
  relAtom,
  rgdbAtom,
  speedAtom,
} from "~/recoil";
import ReportsList from "./ReportsList";

export default function ReportGroupItem({
  item,
  index,
  reportGroup,
  setExpanded,
}) {
  const [ids] = useRecoilState(idsAtom);
  const [r0g1] = useRecoilState(rgdbAtom);

  const requires = reportGroup.requires;
  const params = useMemo(() => {
    let newParams = [r0g1];
    for (const i in requires) {
      newParams = [...newParams, ids[requires[i]]];
    }
    return newParams;
  }, [ids, r0g1, requires]);

  const [data, setData] = useState();
  const [offset, setOffset] = useRecoilState(offsetAtom);
  const setRel = useSetRecoilState(relAtom);
  const setGraph = useSetRecoilState(graphAtom);
  const setSpeed = useSetRecoilState(speedAtom);

  const _active = useRef(false);

  useEffect(() => {
    if (typeof item.url === "function") {
      axios
        .get(item.url(...params))
        .then((res) => {
          console.log(res);
          setData(res.data);

          // if something changed while menu was open
          if (_active.current) {
            // update rel diagram
            const tables = res.data?.tables;
            if (tables) setRel({ tables });
            // update graph diagram
            const graph = res.data?.graph;
            if (graph) setGraph(graph);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [item, params, setGraph, setRel]);

  const nodeId = useMemo(() => "depth1-" + index, [index]);

  const handleClick = useCallback(() => {
    setExpanded(!_active.current ? nodeId : undefined);

    // if going to be active
    if (!_active.current) {
      setSpeed(data?.time);
      // update rel diagram
      const tables = data?.tables;
      if (tables) setRel({ tables });
      // update graph diagram
      const graph = data?.graph;
      if (graph) setGraph(graph);
    }

    _active.current = !_active.current;
  }, [
    data?.graph,
    data?.tables,
    data?.time,
    nodeId,
    setExpanded,
    setGraph,
    setRel,
    setSpeed,
  ]);

  return !data ? null : (
    <TreeItem
      aria-expanded={true}
      nodeId={nodeId}
      label={`${item.title} (${data.info?.length || 0})`}
      onClick={handleClick}
    >
      <ReportsList
        offset={offset}
        setOffset={setOffset}
        index={index}
        data={data}
        item={item}
      />
    </TreeItem>
  );
}
