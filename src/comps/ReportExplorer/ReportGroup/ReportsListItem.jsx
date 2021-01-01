import TreeItem from "@material-ui/lab/TreeItem";
import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { detailsAtom, speedAtom, tablesAtom } from "~/recoil";

export default function ReportsListItem({ index, data, item, report, i }) {
  const setDetails = useSetRecoilState(detailsAtom);
  const setTables = useSetRecoilState(tablesAtom);
  const setSpeed = useSetRecoilState(speedAtom);

  const handleClick = useCallback(
    (report) => {
      setDetails(report);
      setSpeed(data?.time);

      const tables = data?.tables;
      if (tables) setTables(tables);

      const graph = { nodes: data?.nodes, edges: data?.edges };
      if (graph.nodes && graph.edges) {
        console.log(graph);
      }
    },
    [
      data?.edges,
      data?.nodes,
      data?.tables,
      data?.time,
      setDetails,
      setSpeed,
      setTables,
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
