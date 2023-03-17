import { ReactNode } from "react";
import { Toolbar } from "./Toolbar";

const appContainerStyles = { height: "100%" };

export const AppContainer = (props: { children: ReactNode }) => {
  return (
    <div style={appContainerStyles}>
      <Toolbar />
      {props.children}
    </div>
  );
};
