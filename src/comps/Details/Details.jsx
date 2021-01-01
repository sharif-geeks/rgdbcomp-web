import {
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import { Fragment, useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { detailsAtom, rgdbAtom, speedAtom } from "~/recoil";
import { Row } from "../shared";

export default function Details() {
  const [details] = useRecoilState(detailsAtom);
  const [r0g1] = useRecoilState(rgdbAtom);

  const groups = useMemo(() => {
    if (!r0g1) return [details];
    else {
      let groups = [];
      const keys = Object.keys(details);
      for (const i in keys) groups = [...groups, details[keys[i]]];
      return groups;
    }
  }, [details, r0g1]);

  return (
    <Container>
      <Wrapper>
        <Paper square>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            style={{ borderRadius: [20, 20, 20, 20] }}
            centered
            variant="fullWidth"
          >
            <Tab label="Details" />
          </Tabs>
        </Paper>

        {groups.map((list, i) => (
          <Fragment key={i}>
            <ListView items={list} name={!!r0g1 && Object.keys(details)[i]} />
            <Divider />
          </Fragment>
        ))}

        <SpeedAnalyse />
      </Wrapper>
    </Container>
  );
}

const ListView = ({ items, name }) => {
  const classes = useStyles();

  const [substr, setSubstr] = useState("");
  const handleSearchInputChange = useCallback(
    (e) => setSubstr(e.target.value),
    []
  );

  const data = useMemo(
    () =>
      Object.keys(items)
        .filter((d) => d.includes(substr))
        .map((key) => ({ key: key, value: items[key] })),
    [items, substr]
  );

  return (
    <Fragment>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={`Search ${name ? '"' + name + '"' : "keys"}`}
          inputProps={{ "aria-label": "search keys" }}
          onChange={handleSearchInputChange}
          fullWidth
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <InfoWrapper>
        {data.map(({ key, value }, i) => (
          <Row key={i}>
            <p>{key}</p>
            <p>{value}</p>
          </Row>
        ))}
      </InfoWrapper>
    </Fragment>
  );
};

const SpeedAnalyse = () => {
  const [speed] = useRecoilState(speedAtom);

  return !speed ? null : (
    <Row justifySpaceBetween padding="0 12px">
      <p>Retrieved in:</p>
      <p>{Math.round(speed)} ms</p>
    </Row>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    margin: "12px 8px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const InfoWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 12px;
  font-size: 12px;
`;

const Wrapper = styled.div`
  background-color: #6665;
  height: 100%;
  border-radius: 0 22px 22px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 0 0 320px;
  padding: 12px 22px 12px 4px;
  overflow: hidden;
`;
