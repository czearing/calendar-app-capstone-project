import { ReactNode } from "react";
import { Toolbar } from "./Toolbar";

export const AppContainer = (props: { children: ReactNode }) => {
  return (
    <>
      <Toolbar />
      <div>{props.children}</div>
    </>
  );
};
