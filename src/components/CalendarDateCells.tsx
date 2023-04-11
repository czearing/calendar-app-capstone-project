import React from "react";
import {
  getFirstDayOfMonth,
  getDaysInMonth,
  getDaysInPreviousMonth,
} from "../utils";
import { tokens } from "@fluentui/react-theme";
import type { DateMonthYear } from "../utils";
import { CalendarCell } from "./CalendarCell";
import { makeStyles, shorthands } from "@griffel/react";
import { getCurrentDayMonthYear } from "../utils";

const useCalendarDateCellsStyles = makeStyles({
  calendarTable: {
    display: "grid",
    flexDirection: "column",
    backgroundColor: tokens.colorNeutralBackground2,
    width: "100%",
    height: "calc(100% - 147px)",
    ...shorthands.overflow("auto"),
  },
  calendarGridRow: {
    display: "grid",
    verticalAlign: "top",
    borderCollapse: "collapse",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: "1fr",
    alignItems: "end",
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
  },
});

export const CalendarDateCells = (props: { date: DateMonthYear }) => {
  const { date } = props;
  const calendarDateCellsStyles = useCalendarDateCellsStyles();

  const renderedMonth = date.month;
  const renderedYear = date.year;

  // Calculate the necessary date information for the calendar.
  const currentDate = getCurrentDayMonthYear();
  const firstDayOfMonth = getFirstDayOfMonth(renderedMonth, renderedYear);
  const daysInMonth = getDaysInMonth(renderedMonth, renderedYear);
  const daysInPrevMonth = getDaysInPreviousMonth(renderedMonth, renderedYear);

  // Use a useMemo hook to memoize the cells array and only recompute it when the date prop changes
  const dateCells = React.useMemo(() => {
    // Initialize an empty array to store the cells
    let cells = [];
    let rows = [];

    // Loop through the days before the first day of the month and add them to the cells array
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      let dayOfMonth = daysInPrevMonth - i;

      cells.push(
        <CalendarCell
          day={dayOfMonth}
          month={renderedMonth - 1}
          year={renderedYear}
          cellType={"prev"}
          currentDate={currentDate}
          isRenderedMonth={false}
          firstRenderedDay={i === firstDayOfMonth - 1}
        />
      );
    }

    // Loop through the days in the month and add them to the cells array
    for (let i = 1; i <= daysInMonth; i++) {
      let dayOfMonth = i;
      cells.push(
        <CalendarCell
          day={dayOfMonth}
          month={renderedMonth}
          year={renderedYear}
          currentDate={currentDate}
          cellType={"curr"}
          isRenderedMonth={true}
        />
      );
    }

    // Loop through the days after the last day of the month and add them to the cells array
    let numNextMonthDays = (7 - (cells.length % 7)) % 7;

    for (let i = 1; i <= numNextMonthDays; i++) {
      let dayOfMonth = i;
      cells.push(
        <CalendarCell
          day={dayOfMonth}
          month={renderedMonth + 1}
          year={renderedYear}
          cellType={"next"}
          currentDate={currentDate}
          isRenderedMonth={false}
        />
      );
    }

    // Split cells into rows
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(
        <div
          className={calendarDateCellsStyles.calendarGridRow}
          key={`row${i}`}
        >
          {cells.slice(i, i + 7)}
        </div>
      );
    }

    return rows;
  }, [
    calendarDateCellsStyles.calendarGridRow,
    currentDate,
    daysInMonth,
    daysInPrevMonth,
    firstDayOfMonth,
    renderedMonth,
    renderedYear,
  ]);

  return (
    <div className={calendarDateCellsStyles.calendarTable}> {dateCells}</div>
  );
};
