import React from "react";
import type { DateMonthYear } from "../utils";

export type DateContextValue = {
  date: DateMonthYear;
  setDate: React.Dispatch<React.SetStateAction<DateMonthYear>>;
};

export const DateContext = React.createContext<DateContextValue>({
  date: { day: 0, month: "January", year: 0 },
  setDate: () => {},
});

export const DateProvider = DateContext.Provider;

export const useDate = () => React.useContext(DateContext);
