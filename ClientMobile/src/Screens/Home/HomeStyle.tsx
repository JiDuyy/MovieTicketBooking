import { StyleSheet } from "react-native";
import { fontSize, spacing } from "../../Utils/size";
import { color } from "../../Utils/color";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.SCREEN,
  },
  backgroundImage: {
    position: "absolute",
    width: "120%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.EMPTY_TOP,
    marginBottom: spacing.SCREEN,
  },
  title: {
    color: color.TITLE,
    fontSize: fontSize.TITLE_AVATAR,
  },
  subtitle: {
    color: color.SUB_TITLE,
    fontSize: fontSize.SUB_TITLE,
  },
  circleAvata: {
    width: fontSize.BG_AVATAR,
    height: fontSize.BG_AVATAR,
    borderRadius: fontSize.BORDER_RADIUS,
  },
  body: {},
  search: {
    width: "100%",
    height: 65,
    borderWidth: 1,
    borderColor: color.SUB_TITLE,
    borderRadius: fontSize.BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.SCREEN,
    gap: 10,
    marginBottom: spacing.SCREEN,
  },
  textInputSearch: {
    flex: 1,
    height: 40,
    fontSize: spacing.SCREEN,
  },
  headerMovie: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.SCREEN,
  },
  containerIcon: {
    flexDirection: "row",
    gap: 10,
  },
  titleBody: {
    color: color.TITLE,
    fontSize: fontSize.TITLE_CONTAINER,
    fontWeight: "bold",
  },
  cardMovie: {
    width: "90%",
    height: "70%",
    borderRadius: fontSize.BORDER_RADIUS,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageMovie: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  footerMovie: {
    width: "100%",
    height: "30%",
    backgroundColor: "#00000050",
    padding: 5,
  },
  titleMovie: {
    fontSize: fontSize.TITLE_CONTAINER,
    color: color.PRIMARY,
    fontWeight: "bold",
  },
  subTitleMovie: {
    fontSize: fontSize.SUB_TITLE,
    color: color.TITLE,
    flex: 1,
  },
  containerButton: {
    flexDirection: "row",
    gap: spacing.SCREEN,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: fontSize.BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBooking: {
    backgroundColor: color.PRIMARY,
  },
  buttonDetail: {
    borderWidth: 1,
    borderColor: color.TITLE,
  },
  buttonTitle: {
    color: color.TITLE,
    fontSize: fontSize.TEXT_BUTTON,
  },
  buttonImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: fontSize.BORDER_RADIUS,
  },
  titleMovieList: {
    color: color.TITLE,
    fontSize: fontSize.TITLE_CONTAINER,
    marginVertical: spacing.SCREEN,
    fontWeight: "bold",
  },
  titleMovieCategori: {
    color: color.TITLE,
    fontSize: fontSize.TEXT_BUTTON,
    paddingBottom: 20,
  },
  containerMovieCategori: {
    flexDirection: "row",
    gap: spacing.SCREEN,
    marginTop: spacing.SCREEN,
    height: 30,
    alignItems: "center",
  },
  footerMovieHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerStart: {
    flexDirection: "row",
  },
  emptyScrollView: {
    marginBottom: spacing.EMPTY_BOTTOM,
  },
});
