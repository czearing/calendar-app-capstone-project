export function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}
