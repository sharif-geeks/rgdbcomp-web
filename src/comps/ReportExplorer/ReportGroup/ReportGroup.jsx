import { makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeView from "@material-ui/lab/TreeView";
import React from "react";
import { useRecoilState } from "recoil";
import { idsAtom } from "~/recoil";
import ReportGroupItem from "./ReportGroupItem";

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

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
