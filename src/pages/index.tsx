import * as React from "react";
import { DateProvider } from "../context";
import { MonthCalendarView } from "../components";
import { CalendarToolbar } from "../components";
import { getCurrentDayMonthYear, useLocation } from "../utils";
import { useQuery } from "react-query";
import { fetchWeather } from "../server";

const IndexPage = () => {
  const [date, setDate] = React.useState(getCurrentDayMonthYear());
  const location = useLocation();

  const { status, data, error } = useQuery(
    ["weather", location],
    fetchWeather,
    {
      // Only send a request if location is defined
      enabled: !!location,
      // Allow a new ping every 60 minutes.
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  console.log(location);
  console.log(data);
  return (
    <DateProvider value={{ date, setDate }}>
      {/* {data?.main.humidity} */}
      <CalendarToolbar />
      <MonthCalendarView />
    </DateProvider>
  );
};

export default IndexPage;
