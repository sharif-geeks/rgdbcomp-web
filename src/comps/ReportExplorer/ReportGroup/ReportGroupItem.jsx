import TreeItem from "@material-ui/lab/TreeItem";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { idsAtom, rgdbAtom } from "~/recoil";
import ReportsList from "./ReportsList";

const perPage = 8;

export default function ReportGroupItem({ item, index, reportGroup }) {
  const [data, setData] = useState();
  const [ids] = useRecoilState(idsAtom);
  const [r0g1] = useRecoilState(rgdbAtom);

  const requires = reportGroup.requires;

  const [offset, setOffset] = useState(0);

  const params = useMemo(() => {
    let newParams = [r0g1];
    if (item.hasOffset) newParams = [...newParams, offset];
    for (const i in requires) {
      newParams = [...newParams, ids[requires[i]]];
    }
    return newParams;
  }, [ids, item.hasOffset, offset, r0g1, requires]);

  useEffect(() => {
    if (typeof item.url === "function") {
      axios
        .get(item.url(...params), {
          params: item.hasOffset && { offset, count: perPage },
        })
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [ids, item, params, r0g1, reportGroup.requires]);

  return !data ? null : (
    <TreeItem
      nodeId={"depth1-" + index}
      label={`${item.title} (${data.info?.length || 0})`}
    >
      <ReportsList
        index={index}
        data={data}
        item={item}
        setOffset={!!item.hasOffset && setOffset}
      />
    </TreeItem>
  );
}
