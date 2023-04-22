import * as React from "react";
import {
  DateProvider,
  WeatherProvider,
  CalendarMenuProvider,
  useWindowSize,
} from "../context";
import type { WeatherData } from "../context";
import { MonthCalendarView, CalendarToolbar } from "../components";
import { getCurrentDayMonthYear, useLocation } from "../utils";
import { useQuery } from "react-query";
import { fetchWeather } from "../server";

const IndexPage = () => {
  const windowSize = useWindowSize();
  const [calendarMenuOpen, setCalendarMenuOpen] = React.useState({
    calendarMangerMenuOpen: windowSize === "lg",
  });
  const [date, setDate] = React.useState(getCurrentDayMonthYear());
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const location = useLocation();

  const { data } = useQuery(["weather", location], fetchWeather, {
    enabled: !!location,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
  });

  React.useEffect(() => {
    setWeather(data || null);
  }, [data]);

  React.useEffect(() => {
    setCalendarMenuOpen({ calendarMangerMenuOpen: windowSize === "lg" });
  }, [windowSize]);

  return (
    <CalendarMenuProvider value={{ calendarMenuOpen, setCalendarMenuOpen }}>
      <DateProvider value={{ date, setDate }}>
        <WeatherProvider value={{ weather, setWeather }}>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "row",
              width: "100%",
            }}
          >
            {/* {calendarMenuOpen.calendarMangerMenuOpen && (
              <CalendarManagerSidebar />
            )} */}
            <div
              style={{
                width: "100%",
              }}
            >
              <CalendarToolbar />
              <MonthCalendarView />
            </div>
          </div>
        </WeatherProvider>
      </DateProvider>
    </CalendarMenuProvider>
  );
};

export default IndexPage;
