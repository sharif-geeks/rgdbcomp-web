import TreeItem from "@material-ui/lab/TreeItem";
import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { detailsAtom, graphAtom, relAtom, speedAtom } from "~/recoil";

export default function ReportsListItem({ index, data, item, report, i }) {
  const setDetails = useSetRecoilState(detailsAtom);
  const setSpeed = useSetRecoilState(speedAtom);
  const setRel = useSetRecoilState(relAtom);
  const setGraph = useSetRecoilState(graphAtom);

  const handleClick = useCallback(
    (report) => {
      setDetails(report);
      setSpeed(data?.time);

      const tables = data?.tables;
      if (tables) setRel({ tables });

      const graph = data?.graph;
      if (graph) setGraph(graph);
    },
    [
      data?.tables,
      data?.graph,
      data?.time,
      setDetails,
      setGraph,
      setRel,
      setSpeed,
    ]
  );

  const label = ` • \xa0 ${item.displayKeys
    ?.map(
      (key) =>
        report[key] &&
        report[key].slice(0, 22) + (report[key].length > 22 ? "..." : "")
    )
    .join(" \n ")}`;

  return (
    <TreeItem
      nodeId={`report-${index}-${i}`}
      label={label}
      onClick={() => handleClick(report)}
      style={{ whiteSpace: "pre-line", marginBottom: 8 }}
    />
  );
}
