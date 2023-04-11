import * as React from "react";
import { DateProvider, WeatherProvider } from "../context";
import type { WeatherData } from "../context";
import {
  MonthCalendarView,
  CalendarToolbar,
  CalendarManagerSidebar,
} from "../components";
import { getCurrentDayMonthYear, useLocation } from "../utils";
import { useQuery } from "react-query";
import { fetchWeather } from "../server";
import { useSession } from "next-auth/react";

const IndexPage = () => {
  const [date, setDate] = React.useState(getCurrentDayMonthYear());
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const location = useLocation();

  const { status, data, error } = useQuery(
    ["weather", location],
    fetchWeather,
    {
      enabled: !!location,
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  React.useEffect(() => {
    setWeather(data || null);
  }, [data]);

  return (
    <DateProvider value={{ date, setDate }}>
      <WeatherProvider value={{ weather, setWeather }}>
        <CalendarToolbar />
        {/* <CalendarManagerSidebar /> */}
        <MonthCalendarView />
      </WeatherProvider>
    </DateProvider>
  );
};

export default IndexPage;
