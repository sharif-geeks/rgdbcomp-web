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
  dataAtom,
  dateRangeAtom,
  idsAtom,
  offsetAtom,
  rgdbAtom,
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
  const urlArgs = useMemo(() => {
    const requires = reportGroup.requires || [];
    let newArgs = [r0g1]; // always required - always first arg
    for (const i in requires) {
      newArgs = [...newArgs, ids[requires[i]]];
    }
    return newArgs;
  }, [ids, r0g1, reportGroup.requires]);

  const [{ start: startDate, end: endDate }] = useRecoilState(dateRangeAtom);
  const params = useMemo(() => {
    const keys = reportGroup.params || [];
    let newParams = {};
    if (keys.includes("date")) {
      if (!startDate || !endDate) return null;
      newParams = { ...newParams, startDate, endDate };
    }
    return newParams;
  }, [endDate, reportGroup.params, startDate]);

  const [data, setData] = useState();
  const [offset, setOffset] = useRecoilState(offsetAtom);
  const setCurrentData = useSetRecoilState(dataAtom);
  const _active = useRef(false);

  useEffect(() => {
    if (typeof item.url === "function" && urlArgs && params) {
      axios
        .get(item.url(...urlArgs), { params })
        .then((res) => {
          console.groupCollapsed(
            `ReportGroupItem %c${item.title}`,
            "color: green;"
          );
          console.log({ res, data: res.data });
          console.groupEnd();

          setData(res.data);
          // if something changed while menu was open
          if (_active.current) setCurrentData(res.data);
        })
        .catch(console.log);
    }
  }, [item, urlArgs, params, setCurrentData]);

  const nodeId = useMemo(() => "depth1-" + index, [index]);
  const handleClick = useCallback(() => {
    setExpanded(!_active.current ? nodeId : undefined);
    // if going to be active
    if (!_active.current) setCurrentData(data);
    // toggle active state
    _active.current = !_active.current;
  }, [data, nodeId, setCurrentData, setExpanded]);

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
