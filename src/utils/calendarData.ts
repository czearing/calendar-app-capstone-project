export type DaysOfWeek = "S" | "M" | "T" | "W" | "T" | "F" | "S";

export const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

export type MonthNames =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export const monthNames: MonthNames[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type DateMonthYear = { day: number; month: number; year: number };
