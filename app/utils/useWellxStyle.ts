import { DarkTheme, useTheme } from "@react-navigation/native"
import { useColorScheme } from "react-native";
import { isRTL } from "../i18n";
import WellxTheme from "../theme/theme";


export const useWellxStyle = () => {
  const extraThemeProps = {}
  const colorScheme = useColorScheme();

  // const theme = colorScheme == "dark" ? DarkTheme : WellxTheme;
  const theme = WellxTheme;

  return {theme: {
    ...theme, extraThemeProps
  }, isRTL}
}

export default useWellxStyle;