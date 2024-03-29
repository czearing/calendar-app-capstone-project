import React from "react";

export type WindowSizeContextValue = string;

export const WindowSizeContext =
  React.createContext<WindowSizeContextValue>("sm");

export const WindowSizeProvider = WindowSizeContext.Provider;

export const useWindowSize = () => React.useContext(WindowSizeContext);
