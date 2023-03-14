import * as React from "react";
import { DateProvider } from "../context";
import { Calendar } from "../components";
import { CalendarToolbar } from "../components";
import { getCurrentDayMonthYear } from "../utils";

const IndexPage = () => {
  const [date, setDate] = React.useState(getCurrentDayMonthYear());

  return (
    <DateProvider value={{ date, setDate }}>
      <CalendarToolbar />
      <Calendar />
    </DateProvider>
  );
};

export default IndexPage;
