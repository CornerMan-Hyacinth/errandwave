const COLORS = {
  darkTheme: "#141511",
  lightTheme: "#fff",
  darkText: "#000000",
  lightText: "#ffffff",
  lightRed: "#FF1F00",
  darkRed: "#881000",
  lightBtnGreen: "#7ED957",
  darkBtnGreen: "#35AF00",
  lightTextGreen: "#5CFF17",
  darkTextGreen: "#2F9902",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  normal: 18,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 8,
  },
  medium: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  large: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
};

export default { COLORS, SIZES, SHADOWS };
