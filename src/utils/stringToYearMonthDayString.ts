/**
 * Converts a given day month and year to a padded string in the format of year month day.
 */
export function stringToYearMonthDayString(
  day: number,
  month: number,
  year: number
) {
  return (
    year +
    "-" +
    (month + 1).toString().padStart(2, "0") +
    "-" +
    day.toString().padStart(2, "0")
  );
}
