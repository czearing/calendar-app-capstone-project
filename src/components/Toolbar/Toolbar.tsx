import React from "react";
import { Toolbar as ToolbarComponent, Text } from "@fluentui/react-components";
import Link from "next/link";
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
    alignItems: "center",
    boxSizing: "border-box",
    flexShrink: 0,
    zIndex: 10000,
    backgroundColor: tokens.colorBrandBackground2,
  },
  linkStyles: {
    textDecorationLine: "none",
    color: tokens.colorNeutralForeground1,
  },
  grow: {
    width: "100%",
    height: "100%",
    ["> *" as any]: {
      flexGrow: 1,
    },
  },
});

export const Toolbar = () => {
  const toolbarStyles = useToolbarStyles();
  const { data: session } = useSession();

  return (
    <ToolbarComponent className={toolbarStyles.root}>
      <Link href="/" passHref>
        <a className={toolbarStyles.linkStyles}>
          <Text size={500} wrap={false}>
            Calendar
          </Text>
        </a>
      </Link>
      <div className={toolbarStyles.grow} />
      {session ? <UserMenuSettings /> : <SignInDialog />}
    </ToolbarComponent>
  );
};
