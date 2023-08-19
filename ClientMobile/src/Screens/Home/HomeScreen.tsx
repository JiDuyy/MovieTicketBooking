import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HomeStyles } from "./HomeStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import DeckSwiper from "react-native-deck-swiper";
import { TypeMovie } from "../../components/TypeMovie/TypeMovie";
import { fontSize } from "../../Utils/size";

interface Movie {
  id: number;
  title: string;
  image: string;
  subTitle: string;
  start: number;
}

interface filmCategorization {
  id: number;
  title: string;
}

interface typeMovie {
  id: number;
  title: string;
}

export const HomeScreen: React.FC = ({ navigation }: any) => {
  const myListMovie: Movie[] = [
    {
      id: 1,
      title: "ONE PIECE",
      image:
        "https://i.pinimg.com/736x/8f/af/6d/8faf6df6aef91200a417a3e1a78a787b.jpg",
      subTitle:
        "With a felt hat and a diverse group of friends, child pirate Monkey D. Luffy takes on an epic treasure hunt in this live-action adaptation of the popular manga.",
      start: 5,
    },
    {
      id: 2,
      title: "NARUTO",
      image:
        "https://i0.wp.com/i.pinimg.com/originals/72/29/02/7229029f3ab98d8f075f2792a2a774b6.jpg",
      subTitle:
        "Naruto Shippuden, also known by the familiar name Naruto part 2 is the sequel to the famous animated film Naruto, set two and a half years after Naruto left Konoha.",
      start: 4,
    },
    {
      id: 3,
      title: "DRAGON BALL",
      image:
        "https://i.pinimg.com/736x/fe/ac/14/feac144d7af2e96a9a88880ad13541d1.jpg",
      subTitle:
        "Years later, Chi Chi wanted Goku to get a steady job, so Goku worked as a farmer. Meanwhile, Goten and Trunks are looking for a gift for Videl that will later be his sister-in-law, Gohan will be engaged to Videl.",
      start: 4.5,
    },
  ];

  const myFilmCategorization: filmCategorization[] = [
    {
      id: 1,
      title: "Popular",
    },
    {
      id: 2,
      title: "Trending",
    },
    {
      id: 3,
      title: "New",
    },
    {
      id: 4,
      title: "Top Rated",
    },
    {
      id: 5,
      title: "Upcoming",
    },
  ];

  const myTypeMovie: typeMovie[] = [
    {
      id: 1,
      title: "Anime",
    },
    {
      id: 2,
      title: "Action",
    },
    {
      id: 3,
      title: "Horror",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [activeCard, setActiveCard] = React.useState<boolean>(true);

  const renderStarIcons = (count: number) => {
    const starIcons = [];

    for (let i: number = 1; i <= 5; i++) {
      if (i <= count) {
        starIcons.push(
          <Ionicons key={i} name="star" color="yellow" size={20} />
        );
      } else if (i - count === 0.5) {
        starIcons.push(
          <Ionicons key={i} name="star-half-outline" color="yellow" size={20} />
        );
      } else {
        starIcons.push(
          <Ionicons key={i} name="star-outline" color="yellow" size={20} />
        );
      }
    }
    return starIcons;
  };
  const renderCard = (movie: Movie): React.ReactElement => {
    return (
      <View style={HomeStyles.cardMovie}>
        <Image
          source={{ uri: movie.image }}
          style={HomeStyles.imageMovie}
          resizeMode="cover"
        />
        <View style={HomeStyles.footerMovie}>
          <View style={HomeStyles.footerMovieHeader}>
            <Text style={HomeStyles.titleMovie}>{movie.title}</Text>
            <View style={HomeStyles.containerStart}>
              {renderStarIcons(movie.start)}
            </View>
          </View>
          <Text style={HomeStyles.subTitleMovie}>{movie.subTitle}</Text>
          <View style={HomeStyles.containerButton}>
            <TouchableOpacity
              style={[HomeStyles.button, HomeStyles.buttonDetail]}
            >
              <Text style={HomeStyles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[HomeStyles.button, HomeStyles.buttonBooking]}
              onPress={() => navigation.navigate("BookingScreen")}
            >
              <Image
                source={{
                  uri: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f7cff6119795171.60b7ca9558e41.jpg",
                }}
                resizeMode="cover"
                style={HomeStyles.buttonImage}
              />
              <Text style={HomeStyles.buttonTitle}>Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const onSwipeLeft = (): void => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const onSwipeRight = (): void => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handelCard = (statusCard: boolean) => {
    setActiveCard(statusCard);
  };

  return (
    <View style={HomeStyles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/0e/5b/a7/0e5ba7f45af8be7522c4f42123a29fdd.jpg",
        }}
        style={HomeStyles.backgroundImage}
        resizeMode="cover"
      />
      <View style={HomeStyles.header}>
        <View>
          <Text style={HomeStyles.title}>Hello JiDuy!</Text>
          <Text style={HomeStyles.subtitle}>Book your favorite movie</Text>
        </View>
        <Image
          style={HomeStyles.circleAvata}
          source={{
            uri: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/333961208_171236535376765_4869047650294311546_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dVy3RLhWFekAX9OhjU2&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAJurexGt8aZfx4htsdHvCsdI3QrWYgAnmcF1wAubwjSw&oe=64E3B44E",
          }}
        />
      </View>
      <View style={HomeStyles.headerMovie}>
        <Text style={HomeStyles.titleBody}>Movie Layout</Text>
        <View style={HomeStyles.containerIcon}>
          <TouchableOpacity onPress={() => handelCard(true)}>
            <Ionicons
              name="copy-outline"
              color="white"
              size={fontSize.ICON_BUTTON}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handelCard(false)}>
            <Ionicons
              name="grid-outline"
              color="white"
              size={fontSize.ICON_BUTTON}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={HomeStyles.body}>
        {activeCard && activeCard ? (
          <DeckSwiper<Movie>
            cards={myListMovie}
            renderCard={renderCard}
            onSwipedLeft={onSwipeLeft}
            onSwipedRight={onSwipeRight}
            stackSize={3}
            stackScale={8}
            stackSeparation={-60} 
            cardIndex={currentIndex}
            backgroundColor="transparent"
            infinite
            animateCardOpacity
            swipeBackCard
          />
        ) : (
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <View style={HomeStyles.containerMovieCategori}>
                  {myFilmCategorization &&
                    myFilmCategorization.map((filmCategorization) => {
                      return (
                        <Text
                          key={filmCategorization.id}
                          style={HomeStyles.titleMovieCategori}
                        >
                          {filmCategorization.title}
                        </Text>
                      );
                    })}
                </View>
              </ScrollView>
              <View style={HomeStyles.emptyScrollView}>
                {myTypeMovie &&
                  myTypeMovie.map((typeMovie) => {
                    return (
                      <View key={typeMovie.id}>
                        <Text style={HomeStyles.titleMovieList}>
                          {typeMovie.title}
                        </Text>
                        <TypeMovie typeMovies={myListMovie} />
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};
