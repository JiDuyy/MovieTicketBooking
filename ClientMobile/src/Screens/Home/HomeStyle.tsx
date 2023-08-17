import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  subtitle: {
    color: "gray",
    fontSize: 13,
  },
  circleAvata: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
  },
  body: {},
  search: {
    width: "100%",
    height: 65,
    // backgroundColor: "#ffffff20",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  textInputSearch: {
    flex: 1,
    height: 40,
    fontSize: 20,
  },
  headerMovie: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerIcon: {
    flexDirection: "row",
    gap: 10,
  },
  titleBody: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  cardMovie: {
    width: "90%",
    height: "70%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
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
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
  subTitleMovie: {
    fontSize: 16,
    color: "white",
    flex: 1,
  },
  containerButton: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBooking: {
    backgroundColor: "red",
  },
  buttonDetail: {
    borderWidth: 1,
    borderColor: "white",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
  },
  buttonImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
