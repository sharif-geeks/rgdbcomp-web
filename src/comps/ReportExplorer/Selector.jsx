import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { idsAtom, rgdbAtom } from "~/recoil";

export default function SelectorContainer(props) {
  const [ids] = useRecoilState(idsAtom);

  for (const i in props.requires) {
    if (!ids[props.requires[i]]) return null;
  }
  return <Selector {...props} />;
}

function Selector({
  slug,
  title,
  displayKey,
  requires,
  index,
  table,
  url,
  ...props
}) {
  const classes = useStyles();
  const [r0g1] = useRecoilState(rgdbAtom);
  const [ids, setValues] = useRecoilState(idsAtom);
  const onSelect = useCallback(
    ({ slug, value }) => setValues((v) => ({ ...v, [slug]: value })),
    [setValues]
  );

  const [data, setData] = useState([]);

  const params = useMemo(() => {
    let newParams = [];
    for (const i in requires) {
      newParams = [...newParams, ids[requires[i]]];
    }
    return newParams;
  }, [ids, requires]);

  useEffect(() => {
    axios
      .get(url(r0g1, ...params))
      .then((res) => {
        console.groupCollapsed(
          `${r0g1 ? "Graph" : "Relational"}: Selector %c${title}`,
          "color: purple;"
        );
        console.log({ res, data: res.data });
        console.groupEnd();

        setData(
          table
            ? res.data
            : res.data.info.length > 10
            ? res.data.info.slice(0, 9)
            : res.data.info
        );
      })
      .catch(console.log);
  }, [r0g1, table, params, url, title]);

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id={"selector-label-" + index}>{title}</InputLabel>
      <Select
        labelId={"selector-label-" + index}
        value={ids[slug] || ""}
        onChange={(e) => onSelect({ slug, value: e.target.value })}
        style={{ backgroundColor: "#0005" }}
      >
        {Array.isArray(data) &&
          data.map((datum, i) => (
            <MenuItem value={datum.id} key={i}>
              {datum[displayKey]}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
  },
}));
