import { monthNames } from "./calendarData";
import type { DateMonthYear } from "./calendarData";

/**
 * Returns the current date in d/m/y format.
 */
export function getDateMonthYear(): DateMonthYear {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  console.log(month);
  const year = currentDate.getFullYear();

  return { day, month, year };
}
