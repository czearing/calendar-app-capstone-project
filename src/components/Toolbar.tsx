import React from "react";
import {
  Toolbar as ToolbarComponent,
  Text,
  Avatar,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemRadio,
  Button,
} from "@fluentui/react-components";
import type { MenuProps } from "@fluentui/react-components";
import Link from "next/link";
import { makeStyles, shorthands } from "@griffel/react";
import { tokens } from "@fluentui/react-theme";
import { useAppContext } from "../context";

const useAppContextSelectors = () => {
  const setTheme = useAppContext((context) => context.setTheme);
  const findTheme = useAppContext((context) => context.findTheme);

  return {
    setTheme,
    findTheme,
  };
};

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
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
    backgroundColor: tokens.colorNeutralBackground1,
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
  const appContext = useAppContextSelectors();
  const userTheme = localStorage.getItem("theme") || "Light";

  const [checkedValues, setCheckedValues] = React.useState<
    Record<string, string[]>
  >({
    theme: [userTheme],
  });

  const onChange: MenuProps["onCheckedValueChange"] = (
    ev,
    { name, checkedItems }
  ) => {
    setCheckedValues({ [name]: checkedItems });
    localStorage.setItem("theme", checkedItems[0]);
  };

  React.useEffect(() => {
    appContext.setTheme(appContext.findTheme(userTheme));
  }, [appContext, userTheme]);

  return (
    <ToolbarComponent className={toolbarStyles.root}>
      <Link href="/" passHref>
        <a className={toolbarStyles.linkStyles}>
          <Text size={500} weight="bold" wrap={false}>
            Calendar App
          </Text>
        </a>
      </Link>
      <div className={toolbarStyles.grow} />
      <Menu inline>
        <MenuTrigger>
          <Button
            appearance="transparent"
            icon={<Avatar name="Bill" color="colorful" />}
            shape="circular"
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuPopover>
              <MenuList
                checkedValues={checkedValues}
                onCheckedValueChange={onChange}
              >
                <MenuItemRadio name="theme" value="System">
                  System Default
                </MenuItemRadio>
                <MenuItemRadio name="theme" value="Light">
                  Light Mode
                </MenuItemRadio>
                <MenuItemRadio name="theme" value="Dark">
                  Dark Mode
                </MenuItemRadio>
              </MenuList>
            </MenuPopover>
          </MenuList>
        </MenuPopover>
      </Menu>
    </ToolbarComponent>
  );
};
