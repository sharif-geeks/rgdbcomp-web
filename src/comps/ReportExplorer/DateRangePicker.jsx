import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
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
  );
}

const Container = styled.div``;
