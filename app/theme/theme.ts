import { DefaultTheme } from "@react-navigation/native";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";


export const WellxTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors
    },
    typography: {
        ...typography
    },
    spacing: {
        ...spacing
    }
}

export default WellxTheme;