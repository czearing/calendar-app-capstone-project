import React from "react";

export type CalendarMenu = { calendarMangerMenuOpen: boolean };

export type CalendarMenuContextValue = {
  calendarMenuOpen: CalendarMenu;
  setCalendarMenuOpen: React.Dispatch<React.SetStateAction<CalendarMenu>>;
};

export const CalendarMenuContext =
  React.createContext<CalendarMenuContextValue>({
    calendarMenuOpen: { calendarMangerMenuOpen: true },
    setCalendarMenuOpen: () => {},
  });

export const CalendarMenuProvider = CalendarMenuContext.Provider;

export const useCalendarMenuSize = () => React.useContext(CalendarMenuContext);
