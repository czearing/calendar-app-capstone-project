import * as React from "react";
import { daysOfWeekSmall, daysOfWeekMedium, daysOfWeekLarge } from "../utils";

const monthCalendarViewStyles = {
  padding: "8px",
};

const smallWeekDayHeader = daysOfWeekSmall.map((day, index) => (
  <div style={monthCalendarViewStyles} key={"small" + index + day}>
    {day}
  </div>
));

const mediumWeekDayHeader = daysOfWeekMedium.map((day, index) => (
  <div style={monthCalendarViewStyles} key={"medium" + index + day}>
    {day}
  </div>
));

const largeWeekDayHeader = daysOfWeekLarge.map((day, index) => (
  <div style={monthCalendarViewStyles} key={"large" + index + day}>
    {day}
  </div>
));

export const weekDayHeaders: any = {
  lg: largeWeekDayHeader,
  md: mediumWeekDayHeader,
  sm: smallWeekDayHeader,
};
