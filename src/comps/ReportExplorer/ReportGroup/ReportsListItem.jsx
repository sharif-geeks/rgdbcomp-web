import TreeItem from "@material-ui/lab/TreeItem";
import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { detailsAtom } from "~/recoil";

export default function ReportsListItem({ index, item, report, i }) {
  const setDetails = useSetRecoilState(detailsAtom);

  const handleClick = useCallback(() => {
    setDetails(report);
  }, [setDetails, report]);

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
      onClick={handleClick}
      style={{ whiteSpace: "pre-line", marginBottom: 8 }}
    />
  );
}
