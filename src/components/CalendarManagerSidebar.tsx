import React from "react";
import { Text, Button } from "@fluentui/react-components";
import { makeStyles, shorthands } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";

const useCalendarManagerSidebarStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: "100%",
    minWidth: "180px",
    maxWidth: "180px",
  },
});

export const CalendarManagerSidebar = () => {
  const calendarManagerSidebarStyles = useCalendarManagerSidebarStyles();
  return <div className={calendarManagerSidebarStyles.root}>Hello</div>;
};
