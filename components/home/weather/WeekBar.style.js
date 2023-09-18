import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
    marginTop: SIZES.xxLarge,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    paddingTop: "3%",
    paddingBottom: "3%",
  },
});

export default styles;
