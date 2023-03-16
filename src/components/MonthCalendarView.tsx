import * as React from "react";
import {
  daysOfWeekSmall,
  daysOfWeekMedium,
  daysOfWeekLarge,
  getFirstDayOfMonth,
  getDaysInMonth,
  getDaysInPreviousMonth,
} from "../utils";
import { makeStyles, shorthands } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";
import { Text } from "@fluentui/react-components";
import { useDate, useWindowSize } from "../context";

const useMonthCalendarViewStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  grow: {
    width: "100%",
    height: "100%",
    ["> *" as any]: {
      flexGrow: 1,
    },
  },
  calendarTable: {
    backgroundColor: tokens.colorNeutralBackground2,
    width: "100%",
    borderCollapse: "collapse",
  },
  weekHeader: {
    height: "50px",
    backgroundColor: tokens.colorNeutralBackground1,
    verticalAlign: "bottom",
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
  },
  calendarGridRow: {
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
  },
  calendarGridItem: {
    height: "100px",
    width: "100px",
    minWidth: "60px",
    verticalAlign: "top",
    ...shorthands.padding("8px"),
  },
});

const monthCalendarViewStyles = { padding: "8px" };

const smallHeader = daysOfWeekSmall.map((day) => (
  <th
    style={monthCalendarViewStyles}
    data-key={"small" + day}
    key={"small" + day}
  >
    {day}
  </th>
));

const mediumHeader = daysOfWeekMedium.map((day) => (
  <th
    style={monthCalendarViewStyles}
    data-key={"med" + day}
    key={"medium" + day}
  >
    {day}
  </th>
));

const largeHeader = daysOfWeekLarge.map((day) => (
  <th
    style={monthCalendarViewStyles}
    data-key={"large" + day}
    key={"large" + day}
  >
    {day}
  </th>
));

export const MonthCalendarView = () => {
  const { date } = useDate();
  const windowSize = useWindowSize();
  const monthCalendarViewStyles = useMonthCalendarViewStyles();
  const calendarRef = React.useRef(null);

  const renderedMonth = date.month;
  const renderedYear = date.year;

  // // Calculate the necessary date information for the calendar.
  // const firstDayOfMonth = getFirstDayOfMonth(renderedMonth, renderedYear);
  // const daysInMonth = getDaysInMonth(renderedMonth, renderedYear);
  // const daysInPrevMonth = getDaysInPreviousMonth(renderedMonth, renderedYear);

  // let cells = [];
  // let rows = [];

  // // Fill cells for previous month
  // for (let i = firstDayOfMonth - 1; i >= 0; i--) {
  //   const dayOfMonth = daysInPrevMonth - i;
  //   cells.push(
  //     <td
  //       key={`prev${dayOfMonth}`}
  //       className={monthCalendarViewStyles.calendarGridItem}
  //     >
  //       <Text>{dayOfMonth}</Text>
  //     </td>
  //   );
  // }

  // // Fill cells for current month
  // for (let i = 1; i <= daysInMonth; i++) {
  //   const dayOfMonth = i;
  //   cells.push(
  //     <td
  //       key={`curr${dayOfMonth}`}
  //       className={monthCalendarViewStyles.calendarGridItem}
  //     >
  //       <Text>{dayOfMonth}</Text>
  //     </td>
  //   );
  // }

  // // Fill cells for next month
  // const numNextMonthDays = (7 - (cells.length % 7)) % 7;
  // for (let i = 1; i <= numNextMonthDays; i++) {
  //   const dayOfMonth = i;
  //   cells.push(
  //     <td
  //       key={`next${dayOfMonth}`}
  //       className={monthCalendarViewStyles.calendarGridItem}
  //     >
  //       <Text>{dayOfMonth}</Text>
  //     </td>
  //   );
  // }

  // // Split cells into rows
  // for (let i = 0; i < cells.length; i += 7) {
  //   rows.push(
  //     <tr className={monthCalendarViewStyles.calendarGridRow} key={`row${i}`}>
  //       {cells.slice(i, i + 7)}
  //     </tr>
  //   );
  // }

  const header = React.useMemo(() => {
    switch (windowSize) {
      case "lg":
        return largeHeader;
      case "md":
        return mediumHeader;
      default:
        return smallHeader;
    }
  }, [windowSize]);

  return (
    <div className={monthCalendarViewStyles.root}>
      <table
        className={monthCalendarViewStyles.calendarTable}
        ref={calendarRef}
      >
        <thead className={monthCalendarViewStyles.weekHeader}>
          <tr>{header}</tr>
        </thead>
        {/* <tbody>{rows}</tbody> */}
      </table>
    </div>
  );
};
