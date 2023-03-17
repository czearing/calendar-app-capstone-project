import React from "react";
import {
  getFirstDayOfMonth,
  getDaysInMonth,
  getDaysInPreviousMonth,
} from "../utils";
import { tokens } from "@fluentui/react-theme";
import type { DateMonthYear } from "../utils";

import { makeStyles, shorthands, mergeClasses } from "@griffel/react";

const useCalendarCellStyles = makeStyles({
  root: {
    minHeight: "100px",
    height: "100%",
    minWidth: "60px",
    verticalAlign: "top",
    ...shorthands.padding("8px"),
    boxSizing: "border-box",
  },
  currentDayCellStyles: {
    position: "relative",
    color: tokens.colorNeutralForegroundOnBrand,
    ...shorthands.borderRadius("50%"),
    width: "26px",
    height: "26px",
    backgroundColor: tokens.colorBrandBackground,
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
    top: "-3px",
    left: "-5.5px",
  },
});

export const CalendarCell = (props: {
  day: number;
  cellType: string;
  isCurrentDay?: Boolean;
}) => {
  const calendarCellStyles = useCalendarCellStyles();
  const { day, cellType, isCurrentDay } = props;

  const calendarCellMergedStyles = mergeClasses(calendarCellStyles.root);

  return (
    <div key={day + "-" + cellType} className={calendarCellMergedStyles}>
      <div className={isCurrentDay && calendarCellStyles.currentDayCellStyles}>
        {day}
      </div>
    </div>
  );
};
