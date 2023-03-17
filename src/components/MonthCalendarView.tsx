import * as React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";
import { weekDayHeaders } from "./WeekDayHeaders";
import { useDate, useWindowSize } from "../context";
import { CalendarDateCells } from "./CalendarDateCells";

const useMonthCalendarViewStyles = makeStyles({
  weekHeader: {
    display: "grid",
    width: "100%",
    height: "50px",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: "1fr",
    gridGap: "5px",
    alignItems: "end",
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
  },
});

export const MonthCalendarView = () => {
  const { date } = useDate();
  const windowSize = useWindowSize();
  const monthCalendarViewStyles = useMonthCalendarViewStyles();

  return (
    <>
      <div className={monthCalendarViewStyles.weekHeader}>
        {weekDayHeaders[windowSize] || weekDayHeaders.sm}
      </div>
      <CalendarDateCells date={date} />
    </>
  );
};
