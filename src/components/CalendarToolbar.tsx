import React from "react";
import {
  Text,
  Button,
  Toolbar as ToolbarComponent,
} from "@fluentui/react-components";
import {
  ChevronDown24Regular,
  ChevronUp24Regular,
} from "@fluentui/react-icons";
import { makeStyles, shorthands } from "@griffel/react";
import { monthNames, getCurrentDayMonthYear } from "../utils";
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

  const currentDate = getCurrentDayMonthYear();

  const resetDate = React.useCallback(() => {
    setDate(getCurrentDayMonthYear());
  }, [setDate]);

  const decrementMonth = React.useCallback(() => {
    setDate((prevDate) => {
      const currentDate = new Date(
        prevDate.year,
        prevDate.month - 1,
        prevDate.day
      );
      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();

      return { day, month, year };
    });
  }, [setDate]);

  const incrementMonth = React.useCallback(() => {
    setDate((prevDate) => {
      const currentDate = new Date(
        prevDate.year,
        prevDate.month + 1,
        prevDate.day
      );
      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();

      return { day, month, year };
    });
  }, [setDate]);

  return (
    <ToolbarComponent className={calendarToolbarStyles.root}>
      <Text size={500} weight="bold" wrap={false} style={{ minWidth: "180px" }}>
        {monthNames[date.month]} {date.year}
      </Text>
      <div className={calendarToolbarStyles.grow} />
      <Button
        onClick={resetDate}
        size="medium"
        appearance="subtle"
        disabled={
          currentDate.year === date.year &&
          currentDate.month === date.month &&
          currentDate.day === date.day
        }
      >
        Today
      </Button>
      <Button
        appearance="subtle"
        onClick={decrementMonth}
        icon={<ChevronUp24Regular />}
      />
      <Button
        appearance="subtle"
        onClick={incrementMonth}
        icon={<ChevronDown24Regular />}
      />
    </ToolbarComponent>
  );
};
