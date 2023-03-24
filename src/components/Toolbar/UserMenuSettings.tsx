import React from "react";
import {
  Avatar,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuItemRadio,
  Button,
} from "@fluentui/react-components";
import type { MenuProps } from "@fluentui/react-components";
import {
  bundleIcon,
  ColorRegular,
  ColorFilled,
  SignOutRegular,
  SignOutFilled,
} from "@fluentui/react-icons";
import { signOut, useSession } from "next-auth/react";
import { useAppContext } from "../../context";

const ColorIcon = bundleIcon(ColorFilled, ColorRegular);
const SignOutIcon = bundleIcon(SignOutFilled, SignOutRegular);

const useAppContextSelectors = () => {
  const setTheme = useAppContext((context) => context.setTheme);
  const findTheme = useAppContext((context) => context.findTheme);

  return {
    setTheme,
    findTheme,
  };
};

const menuHeaderStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  padding: "5px",
};

const menuHeaderNameStyles: React.CSSProperties = {
  fontWeight: "bold",
};

export const UserMenuSettings = () => {
  const appContext = useAppContextSelectors();
  const userTheme = localStorage.getItem("theme") || "Light";
  const { data: session } = useSession();

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

  const onSignOut = () => signOut();

  React.useEffect(() => {
    appContext.setTheme(appContext.findTheme(userTheme));
  }, [appContext, userTheme]);

  return (
    <Menu inline>
      <MenuTrigger>
        <Button
          appearance="transparent"
          icon={<Avatar name={session?.user?.name || "?"} color="colorful" />}
          shape="circular"
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <div style={menuHeaderStyles}>
            <div style={menuHeaderNameStyles}>{session?.user?.name || "?"}</div>
            <div>{session?.user?.email || "?"}</div>
          </div>
          <MenuDivider />
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuItem icon={<ColorIcon />}>Theme</MenuItem>
            </MenuTrigger>
            <MenuPopover>
              <MenuList
                checkedValues={checkedValues}
                onCheckedValueChange={onChange}
              >
                <MenuItemRadio name="theme" value="system">
                  System Default
                </MenuItemRadio>
                <MenuItemRadio name="theme" value="light">
                  Light Mode
                </MenuItemRadio>
                <MenuItemRadio name="theme" value="dark">
                  Dark Mode
                </MenuItemRadio>
              </MenuList>
            </MenuPopover>
          </Menu>
          <MenuDivider />
          <MenuItem icon={<SignOutIcon />} onClick={onSignOut}>
            Sign out
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
