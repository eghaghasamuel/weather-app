import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  containerTemp: {
    width: "100%",
    marginTop: SIZES.small,
    textAlign: "center"
  },
  temperature: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xxLarge,
    color: COLORS.secondary,
    textAlign: "center"
  },
  weatherMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.Large,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: "center"
  },
  weatherTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: "center"
  },
  dayWeek: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: "center"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 80,
    width: "100%"
  },


  weatherBtn: {
    width: "80%",
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  weatherData: {
    width: "40%",
    height: "80%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  weatherData1: {
    width: "60%",
    height: "80%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  phase_img: {
    width: "40%",
    height: "40%",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small,
    
  },
  locationButton: {
    width: "10%",
    height: "10%",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    textAlign: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
