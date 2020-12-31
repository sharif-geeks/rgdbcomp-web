import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  ArrowDownward,
  ArrowUpward,
  ExpandLess,
  ExpandLessRounded,
  ExpandMoreRounded,
} from "@material-ui/icons";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import React, { Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import reportGroups from "./reportGroups";
import selectors from "./selectors";

export default function ReportExplorer() {
  const [showSelectors, setShowSelectors] = useState(true);
  const toggleSelectors = useCallback(() => setShowSelectors((v) => !v), []);

  const [values, setValues] = useState({ league: 1 });
  const onSelect = useCallback(
    ({ slug, value }) => setValues((v) => ({ ...v, [slug]: value })),
    []
  );

  return (
    <Container>
      <Header>
        <Typography variant="subtitle1">Select Items</Typography>
        {showSelectors ? (
          <ExpandMoreRounded
            onClick={toggleSelectors}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <ExpandLessRounded
            onClick={toggleSelectors}
            style={{ cursor: "pointer" }}
          />
        )}
      </Header>
      {showSelectors && (
        <SelectorsWrapper>
          {selectors.map((selector, i) => (
            <Selector
              {...selector}
              values={values}
              onSelect={onSelect}
              key={i}
            />
          ))}
        </SelectorsWrapper>
      )}
      {!showSelectors && <Divider />}
      <Header>
        <Typography variant="subtitle1">Reports List</Typography>
      </Header>
      <ReportGroupsWrapper>
        {reportGroups.map((reportGroup, i) => (
          <ReportGroup reportGroup={reportGroup} values={values} key={i} />
        ))}
      </ReportGroupsWrapper>
    </Container>
  );
}

const Selector = ({ slug, requires, title, values, onSelect, index }) => {
  const classes = useStyles();

  for (const i in requires) {
    if (!values[requires[i]]) return null;
  }

  const data = [
    { id: 1, name: "Champion League" },
    { id: 2, name: "Second League" },
  ];

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id={"selector-label-" + index}>{title}</InputLabel>
      <Select
        labelId={"selector-label-" + index}
        value={values[slug]}
        onChange={(e) => onSelect({ slug, value: e.target.value })}
      >
        {data.map((datum, i) => (
          <MenuItem value={datum.id} key={i}>
            {datum.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const ReportGroup = ({ reportGroup, values }) => {
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
            <TreeItem nodeId={"depth1-" + i} label={item.title} key={i}>
              <ReportsList index={i} />
            </TreeItem>
          ))}
        </TreeView>
      </AccordionDetails>
    </Accordion>
  );
};

const ReportsList = ({ index }) => {
  const players = require("./collections/players").default;

  const handleClick = useCallback(() => {}, []);

  return (
    <Fragment>
      {players.map((report, i) => (
        <TreeItem
          nodeId={`report-${index}-${i}`}
          label={report.full_name}
          onClick={handleClick}
        />
      ))}
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Header = styled.div`
  padding: 22px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const SelectorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 22px 12px 22px;
`;

const ReportGroupsWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 22px 12px 22px;
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
