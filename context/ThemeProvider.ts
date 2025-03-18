import React, { useState, useEffect, ReactNode } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

// Define the props for the ThemeProvider
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  // Update the theme when the system color scheme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  // Determine the theme based on the color scheme
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  // Provide the context value
  const contextValue: ThemeContextType = {
    colorScheme,
    setColorScheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
