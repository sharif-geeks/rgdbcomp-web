import TreeItem from "@material-ui/lab/TreeItem";
import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { detailsAtom, tablesAtom } from "~/recoil";

export default function ReportsListItem({ index, data, item, report, i }) {
  const setDetails = useSetRecoilState(detailsAtom);
  const setTables = useSetRecoilState(tablesAtom);

  const handleClick = useCallback(
    (report) => {
      setDetails(report);

      const tables = data?.tables;
      if (tables) setTables(tables);

      const graph = { nodes: data?.nodes, edges: data?.edges };
      if (graph.nodes && graph.edges) {
        console.log(graph);
      }
    },
    [data?.edges, data?.nodes, data?.tables, setDetails, setTables]
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
