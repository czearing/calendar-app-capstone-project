import * as React from "react";
import {
  monthNames,
  daysOfWeek,
  getFirstDayOfMonth,
  getDaysInMonth,
  getDaysInPreviousMonth,
} from "../utils";

export const Calendar = () => {
  const [date, setDate] = React.useState(new Date());
  const calendarRef = React.useRef(null);

  const renderedMonth = date.getMonth();
  const renderedYear = date.getFullYear();

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const decrementMonth = React.useCallback(() => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  }, []);

  const incrementMonth = React.useCallback(() => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  }, []);

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
      <h1>
        {monthNames[renderedMonth]} {renderedYear}
      </h1>
      <button onClick={decrementMonth}>Previous Month</button>
      <button onClick={incrementMonth}>Next Month</button>
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
