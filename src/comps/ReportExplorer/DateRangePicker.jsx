import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { accentColor } from "~/assets/colors";
import { dateRangeAtom } from "~/recoil";

export default function DateRangePicker() {
  const [{ start, end }, set] = useRecoilState(dateRangeAtom);

  const handleDateChange = useCallback(
    (dateRange) => {
      if (dateRange.end && dateRange.start > dateRange.end)
        return alert("Start date must be before due date!");
      if (dateRange.start && dateRange.start > Date.now())
        return alert("Start date must be before today");
      if (dateRange.end && dateRange.end > Date.now())
        return alert("Due date must be before today");

      set(dateRange);
    },
    [set]
  );

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            margin="normal"
            id="date-picker-inline"
            label="Start date"
            value={start}
            onChange={(date) => handleDateChange({ start: date, end })}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            fullWidth
            size="small"
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            margin="normal"
            id="date-picker-inline"
            label="Due Date"
            value={end}
            onChange={(date) => handleDateChange({ start, end: date })}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            fullWidth
            size="small"
          />
        </Container>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

const Container = styled.div``;

const theme = createMuiTheme({
  shape: { borderRadius: 18 },
  palette: { type: "dark", primary: { main: accentColor } },
  typography: { fontFamily: "Ubuntu" },
  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.333)",
        borderRadius: "18px 18px 0 0",
        '& [class*="MuiInputLabel-shrink"]': { marginTop: 8 },
      },
    },
    MuiFormLabel: {
      root: { marginLeft: 12 },
    },
    MuiInputBase: {
      root: { padding: "8px 4px 8px 12px" },
    },
    MuiInputAdornment: {
      root: { transform: "translateY(-8px)" },
    },
  },
});
