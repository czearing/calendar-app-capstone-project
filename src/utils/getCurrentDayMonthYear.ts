import type { DateMonthYear } from "./calendarData";

/**
 * Returns the current date in d/m/y format.
 */
export function getCurrentDayMonthYear(): DateMonthYear {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return { day, month, year };
}
