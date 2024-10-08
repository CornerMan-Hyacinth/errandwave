const COLORS = {
  darkTheme: "#141511",
  lightTheme: "#fff",
  darkPink: "#B5055D",
  faded: "rgba(179, 7, 132, 0.7)",
  lightFaded: "rgba(179, 7, 132, 0.05)",
  gradient: ["rgba(179, 7, 132, 1)", "rgba(130, 4, 102, 0.5)"],
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
    shadowColor: "#B30784",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 8,
  },
  medium: {
    shadowColor: "#B30784",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  large: {
    shadowColor: "#B30784",
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
