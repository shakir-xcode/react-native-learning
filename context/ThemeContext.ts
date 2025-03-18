import { createContext, useContext } from "react";
import { ColorSchemeName } from "react-native";
import { Colors } from "@/constants/Colors";

// Define the type for the context value
export type ThemeContextType = {
  colorScheme: ColorSchemeName;
  setColorScheme: (scheme: ColorSchemeName) => void;
  theme: typeof Colors.light | typeof Colors.dark;
};

// Create the context with a default value
// export const ThemeContext = createContext<ThemeContextType>({
//   colorScheme: "light",
//   setColorScheme: () => {},
//   theme: Colors.light,
// });

export const ThemeContext = createContext<ThemeContextType>({
  colorScheme: "light",
  setColorScheme: () => {},
  theme: Colors.light,
});
export const useTheme = () => useContext(ThemeContext);
