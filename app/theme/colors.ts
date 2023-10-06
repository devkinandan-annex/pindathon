// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",




  /* update colors */

  activeBottomTab: '#5043ED',
  aightText: '#5043ED',
  bottomTabLebal:'#92989B',
  red: '#ED3683',
  gBlue: '#a337b1',
  gRed: '#d83690',
  
  blue: '#4639EA',
  blackText:'#242627',
  descText: '#92989B',
  connectDeviceButton: '#F5F7F8',
  challangeBorder:'#E7ECEE',
  darkPink: '#F63C81',
  error: '#E6464A',
  success: '#33BF7C',
  lightBlue: '#F3F3FE',
  mango: '#F3C19C',
  yellow: "#F4BB29",
  pickerColor: '#DCD9FB',
  

  lvl1: "#69C8F3",
  lvl2: "#4E8FF7",
  lvl3: "#A269F2",
  lvl4: "#FCD07D",
  lvl5: "#F5A142",
  lvl6: "#E05C8D",
  lvl7: "#B9317B",
  lvl8: "#752450",
  lvl99:"#512475",
  lvl999:"#242775",
  lightPink:'#a09df829',
  lightPink1:'#fa9cbf29',
  darkBlue:'#413CF1',

  badgeGradient: {
    gymBadge: ["#eb7280", '#bf4383'],
    sleepBadge: ['#4089ff' , '#5f59ff'],
    stepBadge: ['#a737af' , '#de378e'],
    activityBadge: ['#FFBD53','#F06D0C'],

  },

  
}

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
   gymBadge:palette.badgeGradient.gymBadge,
   sleepBadge:palette.badgeGradient.sleepBadge,
   stepBadge:palette.badgeGradient.stepBadge,
   activityBadge:palette.badgeGradient.activityBadge,

  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral100,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,

  /**
   * The main tinting color.
   */
   activeTabs: palette.activeBottomTab,

     /**
   * The main tinting color.
   */
      normalTabs: palette.bottomTabLebal,

   
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  // error: palette.angry500,
  /**
   * Error Background.
   *
   */

  errorBackground: palette.angry100,
  blue: palette.blue,
  red: palette.red,
  gBlue: palette.gBlue,
  gRed: palette.gRed,
  blackText:palette.blackText,
  descText: palette.descText,
  connectDeviceButton: palette.connectDeviceButton,
  challangeBorder:palette.challangeBorder,
  darkPink: palette.darkPink,
  error: palette.error,
  success: palette.success,
  lightBlue: palette.lightBlue,
  mango: palette.mango,
  yellow: palette.yellow,
  lightPink:palette.lightPink,
  lightPink1:palette.lightPink1,
  darkBlue:palette.darkBlue,
  lvl5:palette.lvl5,
  pickerColor: palette.pickerColor,

}

export const themeColors = {
  light: {
    ...colors
  }
}

export const androidShadow = {
    backgroundColor: "#FFFFFF",
    // shadowColor: '#E0E9E0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 4,
    shadowRadius: 7,
    elevation: 3,
}

export const iosShadow = {
    backgroundColor: "#FFFFFF",
    shadowColor: '#E0E9E0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 4,
    shadowRadius: 7,
}