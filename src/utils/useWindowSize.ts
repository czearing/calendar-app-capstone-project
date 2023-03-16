import React from "react";

type Breakpoints = Record<string, number>;

const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 1000,
  lg: 1200,
};

const isWindowClient = typeof window === "object";

export const useWindowSize = (): string => {
  const getBreakPoint = React.useCallback((width: number) => {
    for (const [key, value] of Object.entries(breakpoints)) {
      if (width <= value) {
        return key;
      }
    }
    return "lg";
  }, []);

  // Use a useRef hook to store the current window size
  const windowSizeRef = React.useRef(
    isWindowClient ? getBreakPoint(window.innerWidth) : undefined
  );

  // Use a useState hook to trigger re-renders when the size changes
  const [windowSize, setWindowSize] = React.useState(windowSizeRef.current);

  const setSize = React.useCallback(() => {
    // Get the current window size from the ref
    const currentSize = windowSizeRef.current;
    // Get the new window size from the getBreakPoint function
    const newSize = getBreakPoint(window.innerWidth);
    // Only update the ref and the state if the size has changed
    if (currentSize !== newSize) {
      windowSizeRef.current = newSize;
      setWindowSize(newSize);
    }
  }, [getBreakPoint]);

  React.useEffect(() => {
    if (isWindowClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [setSize]);

  return windowSize!;
};
