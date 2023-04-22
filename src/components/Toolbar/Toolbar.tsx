import React from "react";
import {
  Toolbar as ToolbarComponent,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Button,
  Select,
  ToolbarGroup,
} from "@fluentui/react-components";
import { useCalendarMenuSize } from "../../context";
import { Add24Filled, TextColumnOneWide24Regular } from "@fluentui/react-icons";
import { makeStyles } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";
import { SignInDialog } from "./SignInDialog";
import { UserMenuSettings } from "./UserMenuSettings";
import { useSession } from "next-auth/react";

const useToolbarStyles = makeStyles({
  root: {
    position: "sticky",
    top: "0px",
    height: "48px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    flexShrink: 0,
    zIndex: 10000,
    boxShadow: tokens.shadow2,
  },
  linkStyles: {
    textDecorationLine: "none",
    color: tokens.colorNeutralForeground1,
  },
});

export const Toolbar = () => {
  const { calendarMenuOpen, setCalendarMenuOpen } = useCalendarMenuSize();
  const toolbarStyles = useToolbarStyles();
  const { data: session } = useSession();

  const onClickCalendarMenuButton = React.useCallback(() => {
    setCalendarMenuOpen({
      calendarMangerMenuOpen: false,
    });
  }, [setCalendarMenuOpen]);

  return (
    <ToolbarComponent className={toolbarStyles.root}>
      <ToolbarGroup>
        {/* <Menu>
          <MenuTrigger> */}
        <ToolbarButton
          aria-label="More"
          icon={<TextColumnOneWide24Regular />}
          onClick={onClickCalendarMenuButton}
        />
        {/* </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>New </MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem disabled>Open File</MenuItem>
              <MenuItem>Open Folder</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu> */}
        <Button appearance="primary" icon={<Add24Filled />}>
          New Event
        </Button>
        <ToolbarDivider />
        <Select value="Month" appearance="filled-lighter">
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </Select>
      </ToolbarGroup>
      {session ? <UserMenuSettings /> : <SignInDialog />}
    </ToolbarComponent>
  );
};
