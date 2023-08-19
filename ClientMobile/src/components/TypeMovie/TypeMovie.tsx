import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { styles } from "./Styles";

interface MovieProps {
  id: number;
  title: string;
  image: string;
  subTitle: string;
  start: number;
}

export const TypeMovie: React.FC<{ typeMovies: MovieProps[] }> = ({
  typeMovies,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {typeMovies &&
          typeMovies.map((movie) => {
            return (
              <View key={movie.id} style={styles.cardMovie}>
                <Image
                  source={{ uri: movie.image }}
                  resizeMode="cover"
                  style={styles.image}
                />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};
