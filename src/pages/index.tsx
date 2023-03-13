import * as React from "react";
import { DateProvider } from "../context";
import { Calendar } from "../components";
import { CalendarToolbar } from "../components";
import { getDateMonthYear } from "../utils";

const IndexPage = () => {
  const [date, setDate] = React.useState(getDateMonthYear());

  return (
    <DateProvider value={{ date, setDate }}>
      <CalendarToolbar />
      <Calendar />
    </DateProvider>
  );
};

export default IndexPage;
