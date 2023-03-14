import * as React from "react";
import { DateProvider } from "../context";
import { MonthCalendarView } from "../components";
import { CalendarToolbar } from "../components";
import { getCurrentDayMonthYear } from "../utils";

const IndexPage = () => {
  const [date, setDate] = React.useState(getCurrentDayMonthYear());

  return (
    <DateProvider value={{ date, setDate }}>
      <CalendarToolbar />
      <MonthCalendarView />
    </DateProvider>
  );
};

export default IndexPage;
