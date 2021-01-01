import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

export default function Selector({
  slug,
  requires,
  title,
  relational,
  values,
  onSelect,
  index,
}) {
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
        style={{ backgroundColor: "#0005" }}
      >
        {data.map((datum, i) => (
          <MenuItem value={datum.id} key={i}>
            {datum.name}
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
