import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 100,
    paddingTop: SIZES.small,
    backgroundColor: "white",
    borderRadius: SIZES.xLarge,
    justifyContent: "space-between",
    shadowColor: COLORS.white
  },
  logoContainer:{
    width: 35,
    height: 35,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  companyName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.Large,
    color: COLORS.primary,
    marginTop: 1,
    textAlign: "center"
  },


  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5
  },
});

export default styles;
