import React from "react";
import {
  Text,
  ToggleButton,
  Button,
  Toolbar as ToolbarComponent,
} from "@fluentui/react-components";
import { makeStyles, shorthands } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";
import { useDate } from "../context";

const useCalendarToolbarStyles = makeStyles({
  root: {
    position: "sticky",
    top: "0px",
    height: "48px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxSizing: "border-box",
    flexShrink: 0,
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  grow: {
    width: "100%",
    height: "100%",
    ["> *" as any]: {
      flexGrow: 1,
    },
  },
});

export const CalendarToolbar = () => {
  const { date, setDate } = useDate();
  const calendarToolbarStyles = useCalendarToolbarStyles();

  return (
    <ToolbarComponent className={calendarToolbarStyles.root}>
      <Button size="medium">Today</Button>
      <Button icon={"<"} />
      <Button icon={">"} />
      <Text weight="bold">
        {date.month} {date.year}
      </Text>
      <div className={calendarToolbarStyles.grow} />
      <ToggleButton>Day</ToggleButton>
      <ToggleButton>Week</ToggleButton>
      <ToggleButton>Month</ToggleButton>
    </ToolbarComponent>
  );
};
