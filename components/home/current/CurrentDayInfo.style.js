import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

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
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: "center"
  },
  dayWeek: {
    fontFamily: FONT.bold,
    fontSize: SIZES.Large,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: "center"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    paddingLeft: "auto",
    paddingRight: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    height: 150,
    width: "60%"
  },


  weatherBtn: {
    width: "60%",
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
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

});

export default styles;
