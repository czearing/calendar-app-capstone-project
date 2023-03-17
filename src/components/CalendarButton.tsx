import * as React from "react";
import { Button } from "@fluentui/react-components";

const calendarButtonStyles = {
  minWidth: "32px",
  width: "32px",
  height: "32px",
  padding: "0px",
  margin: "0px",
};

export const CalendarButton = (props: any) => {
  const { date } = props;
  return (
    <Button appearance="subtle" shape="square" style={calendarButtonStyles}>
      {date}
    </Button>
  );
};
