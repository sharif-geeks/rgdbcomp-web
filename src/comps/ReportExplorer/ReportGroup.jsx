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
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { detailsAtom, tablesAtom } from "~/recoil";

export default function ReportGroup({ reportGroup, values }) {
  const classes = useStyles();

  for (const i in reportGroup.requires) {
    if (!values[reportGroup.requires[i]]) return null;
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

  useEffect(() => {
    if (typeof item["relational"] === "function") {
      axios
        .get(item["relational"](1))
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [item]);

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
