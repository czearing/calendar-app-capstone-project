export function getDaysInMonth(month: number, year: number) {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}
