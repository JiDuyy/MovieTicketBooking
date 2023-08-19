import { StyleSheet } from "react-native";
import { fontSize, spacing } from "../../Utils/size";
import { color } from "../../Utils/color";

export const BookingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "13%",
    marginBottom: 50,
    paddingHorizontal: spacing.SCREEN,
  },
  headerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titieHeader: {
    fontWeight: "bold",
    fontSize: fontSize.TITLE_AVATAR,
    color: color.TITLE,
    marginBottom: 5,
  },
  subTitieHeader: {
    fontSize: fontSize.SUB_TITLE,
    color: color.SUB_TITLE,
  },
  containerTV: {
    width: "88%",
    height: 100,
    marginBottom: 20,
  },
  containerChair: {
    gap: 10,
  },
  chair: {
    width: 40,
    height: 30,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  seatInfo: {
    color: "white",
    fontWeight: "bold",
  },

  rowContainer: {
    flexDirection: "row",

    gap: 10,
  },
});
