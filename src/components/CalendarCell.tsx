import React from "react";
import { tokens } from "@fluentui/react-theme";
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
  isDifferentMonth: {
    color: tokens.colorNeutralForeground4,
  },
});

export const CalendarCell = (props: {
  day: number;
  cellType: string;
  isCurrentDay?: Boolean;
  isDifferentMonth?: Boolean;
}) => {
  const calendarCellStyles = useCalendarCellStyles();
  const { day, cellType, isCurrentDay, isDifferentMonth } = props;

  const calendarCellMergedStyles = mergeClasses(
    calendarCellStyles.root,
    isDifferentMonth && calendarCellStyles.isDifferentMonth
  );

  return (
    <div key={day + "-" + cellType} className={calendarCellMergedStyles}>
      <div className={isCurrentDay && calendarCellStyles.currentDayCellStyles}>
        {day}
      </div>
    </div>
  );
};
