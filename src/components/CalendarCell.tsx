import React from "react";
import { tokens } from "@fluentui/react-theme";
import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import { useWeather, useWindowSize } from "../context";
import { DateMonthYear, monthNamesLarge, monthNamesShort } from "../utils";
import { stringToYearMonthDayString, monthNamesMedium } from "../utils";
import { WeatherIcon } from "./WeatherIcon";

const useCalendarCellStyles = makeStyles({
  root: {
    minHeight: "100px",
    height: "100%",
    minWidth: "60px",
    verticalAlign: "top",
    ...shorthands.padding("8px"),
    boxSizing: "border-box",
    ...shorthands.borderLeft("1px", "solid", tokens.colorNeutralStroke1),
  },
  currentDayCellBackgroundStyles: {
    backgroundColor: tokens.colorNeutralBackground4,
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
  firstRenderedDay?: boolean;
}) => {
  const { weather } = useWeather();
  const windowSize = useWindowSize();
  const calendarCellStyles = useCalendarCellStyles();
  const {
    firstRenderedDay,
    day,
    month,
    year,
    cellType,
    currentDate,
    isRenderedMonth,
  } = props;

  const yearMonthDayString = stringToYearMonthDayString(day, month, year);

  const isCurrentDay =
    year === currentDate.year &&
    month === currentDate.month &&
    day === currentDate.day;

  const calendarCellMergedStyles = mergeClasses(
    calendarCellStyles.root,
    isCurrentDay && calendarCellStyles.currentDayCellBackgroundStyles,
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
          {(firstRenderedDay || day === 1) &&
            (windowSize === "lg"
              ? monthNamesLarge[month] + " "
              : windowSize === "md"
              ? monthNamesMedium[month] + " "
              : "")}
          {day}
        </div>
        {weather &&
          windowSize !== "sm" &&
          (weather as any)[yearMonthDayString] && (
            <div className={calendarCellStyles.weatherWrapper}>
              {windowSize !== "md" &&
                Math.round(
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
