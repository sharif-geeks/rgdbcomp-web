import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import styled from "styled-components";
import list from "./list";

export default function ReportExplorer() {
  const classes = useStyles();

  return (
    <Container>
      <Header>
        <Typography variant="subtitle1">Reports List</Typography>
      </Header>
      <Wrapper>
        {list.map((reportGroup, i) => (
          <Accordion key={i} defaultExpanded={!i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {reportGroup.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                {reportGroup.items.map((item, i) => (
                  <TreeItem nodeId={"depth1-" + i} label={item.title}>
                    <ReportsList index={i} />
                  </TreeItem>
                ))}
              </TreeView>
            </AccordionDetails>
          </Accordion>
        ))}
      </Wrapper>
    </Container>
  );
}

const ReportsList = ({ index }) => {
  const reports = [
    { label: "report1" },
    { label: "report2" },
    { label: "report3" },
  ];

  return (
    <Fragment>
      {reports.map((report, i) => (
        <TreeItem nodeId={`report-${index}-${i}`} label={report.label} />
      ))}
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Header = styled.div`
  padding: 22px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
  padding: 22px;
`;

const Container = styled.div`
  flex: 0 0 360px;
  box-sizing: border-box;
  overflow: hidden;
  border-top-right-radius: 48px;
  background-color: #fff5;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
