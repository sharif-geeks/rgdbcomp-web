import { makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import axios from "axios";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { detailsAtom, idsAtom, rgdbAtom, tablesAtom } from "~/recoil";

export default function ReportGroup({ data: reportGroup }) {
  const classes = useStyles();
  const [ids] = useRecoilState(idsAtom);

  for (const i in reportGroup.requires) {
    if (!ids[reportGroup.requires[i]]) return null;
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{reportGroup.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {reportGroup.items.map((item, i) => (
            <ReportGroupItem
              reportGroup={reportGroup}
              item={item}
              index={i}
              key={i}
            />
          ))}
        </TreeView>
      </AccordionDetails>
    </Accordion>
  );
}

const ReportGroupItem = ({ item, index, reportGroup }) => {
  const [data, setData] = useState();
  const [ids] = useRecoilState(idsAtom);
  const [r0g1] = useRecoilState(rgdbAtom);

  const requires = reportGroup.requires;

  const params = useMemo(() => {
    let newParams = [];
    for (const i in requires) {
      newParams = [...newParams, ids[requires[i]]];
    }
    return newParams;
  }, [ids, requires]);

  useEffect(() => {
    if (typeof item[!r0g1 ? "relational" : "graph"] === "function") {
      axios
        .get(item[!r0g1 ? "relational" : "graph"](...params))
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
    <TreeItem nodeId={"depth1-" + index} label={item.title}>
      <ReportsList index={index} data={data} item={item} />
    </TreeItem>
  );
};

const ReportsList = ({ index, data, item }) => {
  const setDetails = useSetRecoilState(detailsAtom);
  const setTables = useSetRecoilState(tablesAtom);

  const reports = data?.info;

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

  return (
    <Fragment>
      {reports.map((report, i) => {
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
      })}
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
