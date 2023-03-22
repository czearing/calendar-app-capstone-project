import React from "react";
import { tokens } from "@fluentui/react-theme";
import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import { useWeather } from "../context";
import type { DateMonthYear } from "../utils";
import { stringToYearMonthDayString } from "../utils";
import { WeatherIcon } from "./WeatherIcon";

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
    textAlign: "center",
    top: "-3px",
    left: "-5.5px",
    lineHeight: "24px",
  },
  isDifferentMonth: {
    color: tokens.colorNeutralForeground4,
  },
  weatherWrapper: {
    display: "flex",
    verticalAlign: "middle",
    ...shorthands.gap("5px"),
    fontWeight: "200",
  },
  calendarCellHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const CalendarCell = (props: {
  day: number;
  month: number;
  year: number;
  cellType: string;
  currentDate: DateMonthYear;
  isRenderedMonth: boolean;
}) => {
  const { weather } = useWeather();
  const calendarCellStyles = useCalendarCellStyles();
  const { day, month, year, cellType, currentDate, isRenderedMonth } = props;

  const yearMonthDayString = stringToYearMonthDayString(day, month, year);

  const isCurrentDay =
    year === currentDate.year &&
    month === currentDate.month &&
    day === currentDate.day;

  const calendarCellMergedStyles = mergeClasses(
    calendarCellStyles.root,
    !isRenderedMonth && calendarCellStyles.isDifferentMonth
  );

  return (
    <div
      key={day + "-" + month + "-" + year + "-" + cellType}
      className={calendarCellMergedStyles}
    >
      <div className={calendarCellStyles.calendarCellHeaderWrapper}>
        <div
          className={
            isCurrentDay ? calendarCellStyles.currentDayCellStyles : ""
          }
        >
          {day}
        </div>
        {weather && (weather as any)[yearMonthDayString] && (
          <div className={calendarCellStyles.weatherWrapper}>
            {Math.round(
              (weather as any)[yearMonthDayString].temperature * 1.8 + 32
            ) + "°"}
            <WeatherIcon
              weatherCode={(weather as any)[yearMonthDayString].weatherCode}
            />
          </div>
        )}
      </div>
    </div>
  );
};
