import * as React from "react";
import {
  daysOfWeek,
  getFirstDayOfMonth,
  getDaysInMonth,
  getDaysInPreviousMonth,
} from "../utils";
import { useDate } from "../context";

export const Calendar = () => {
  const { date } = useDate();
  const calendarRef = React.useRef(null);

  const renderedMonth = date.month;
  const renderedYear = date.year;

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Calculate the necessary date information for the calendar.
  const firstDayOfMonth = getFirstDayOfMonth(renderedMonth, renderedYear);
  const daysInMonth = getDaysInMonth(renderedMonth, renderedYear);
  const daysInPrevMonth = getDaysInPreviousMonth(renderedMonth, renderedYear);

  let cells = [];
  let rows = [];

  // Fill cells for previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const dayOfMonth = daysInPrevMonth - i;
    cells.push(
      <td key={`prev${dayOfMonth}`} className="inactive">
        <button disabled>{dayOfMonth}</button>
      </td>
    );
  }

  // Fill cells for current month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayOfMonth = i;
    cells.push(
      <td
        key={`curr${dayOfMonth}`}
        className={
          dayOfMonth === currentDay &&
          currentYear === renderedYear &&
          currentMonth === renderedMonth
            ? "active"
            : ""
        }
      >
        <button>{dayOfMonth}</button>
      </td>
    );
  }

  // Fill cells for next month
  const numNextMonthDays = (7 - (cells.length % 7)) % 7;
  for (let i = 1; i <= numNextMonthDays; i++) {
    const dayOfMonth = i;
    cells.push(
      <td key={`next${dayOfMonth}`} className="inactive">
        <button disabled>{dayOfMonth}</button>
      </td>
    );
  }

  // Split cells into rows
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(<tr key={`row${i}`}>{cells.slice(i, i + 7)}</tr>);
  }

  return (
    <div>
      <table ref={calendarRef}>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
