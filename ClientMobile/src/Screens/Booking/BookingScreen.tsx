import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { BookingStyle } from "./BooKingStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { color } from "../../Utils/color";
import { fontSize } from "../../Utils/size";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

interface Seat {
  id: number;
  row: string;
  number: number;
  status: string;
}

interface CinemaLayout {
  seats: Seat[];
  rows: string[];
  columns: number[];
}

function generateCinemaLayout(rows: string[], columns: number[]): CinemaLayout {
  const seats: Seat[] = [];

  for (const row of rows) {
    for (const column of columns) {
      const seat: Seat = {
        id: seats.length + 1,
        row: row,
        number: column,
        status: (seats.length + 1) % 5 ? "available" : "occupied",
      };
      seats.push(seat);
    }
  }

  const cinemaLayout: CinemaLayout = {
    seats: seats,
    rows: rows,
    columns: columns,
  };

  return cinemaLayout;
}

const rows: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


export const BookingScreen: React.FC = ({ navigation }: any) => {
  const cinemaLayout: CinemaLayout = generateCinemaLayout(rows, columns);

  const renderSeats = () => {
    return cinemaLayout.rows.map((row: string) => {
      return (
        <View key={row} style={BookingStyle.rowContainer}>
          {cinemaLayout.columns.map((column: number) => {
            const seat = cinemaLayout.seats.find(
              (s) => s.row === row && s.number === column
            );
            const isBooked = seat?.status === "available";
            return (
              <View
                key={`${row}${column}`}
                style={[
                  BookingStyle.chair,
                  { backgroundColor: isBooked ? "red" : "blue" },
                ]}
              >
                <Text style={BookingStyle.seatInfo}>{`${row}${column}`}</Text>
              </View>
            );
          })}
        </View>
      );
    });
  };

  return (
    <ImageBackground
      style={BookingStyle.container}
      source={{
        uri: "https://i.pinimg.com/originals/0e/5b/a7/0e5ba7f45af8be7522c4f42123a29fdd.jpg",
      }}
    >
      <View style={BookingStyle.header}>
        <Ionicons
          name="close"
          color={color.TITLE}
          size={fontSize.ICON_BUTTON}
        />
        <View style={BookingStyle.headerCenter}>
          <Text style={BookingStyle.titieHeader}>ONE PIECE COMBAT</Text>
          <Text style={BookingStyle.subTitieHeader}>3D Titanic</Text>
        </View>
        <Ionicons
          name="film-outline"
          color={color.TITLE}
          size={fontSize.ICON_BUTTON}
        />
      </View>
      <Image
        source={require("../../assets/tv.png")}
        style={BookingStyle.containerTV}
        resizeMode="contain"
      />
      <ReactNativeZoomableView
        style={BookingStyle.containerChair}
        maxZoom={1.5}
        minZoom={0.6}
        initialZoom={0.6}
        contentWidth={750}
        contentHeight={400}
      >
        {renderSeats()}
      </ReactNativeZoomableView>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            name="film-outline"
            color={color.TITLE}
            size={fontSize.ICON_BUTTON}
          />
          <Text style={{ color: "white" }}>Available</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            name="film-outline"
            color={color.TITLE}
            size={fontSize.ICON_BUTTON}
          />
          <Text style={{ color: "white" }}>Available</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            name="film-outline"
            color={color.TITLE}
            size={fontSize.ICON_BUTTON}
          />
          <Text style={{ color: "white" }}>Available</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "#00000080",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ color: "grey" }}>Feb 12, 2023</Text>
          <Text style={{ color: "white", fontSize: 16 }}>19:00 PM</Text>
        </View>
        <View
          style={{
            backgroundColor: "#00000080",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ color: "grey" }}>Room</Text>
          <Text style={{ color: "white", fontSize: 16 }}>Audi 3</Text>
        </View>
        <View
          style={{
            backgroundColor: "#00000080",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ color: "grey" }}>Seats Selected</Text>
          <Text style={{ color: "white", fontSize: 16 }}>F7, F8</Text>
        </View>
      </View>

      <View
        style={{
          width: "90%",
          height: 70,
          backgroundColor: "red",
          marginBottom: 20,
          borderRadius: 10,
          flexDirection: "row",
          paddingHorizontal: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Total Peyment</Text>
        <Text style={{ color: "white", fontSize: 20 }}>$25.00</Text>
      </View>
    </ImageBackground>
  );
};
