import * as React from "react";
import { Button } from "@cebus/react-components";

export const CalendarButton = (props: any) => {
  const { date } = props;
  return (
    <Button
      appearance="subtle"
      shape="square"
      style={{
        minWidth: "32px",
        width: "32px",
        height: "32px",
        padding: "0px",
        margin: "0px",
      }}
    >
      {date}
    </Button>
  );
};
