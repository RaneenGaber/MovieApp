import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,} from "react-native";
import React from 'react'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Movie = ({ title, overview, date, poster_path }) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        backgroundColor: "#440431",
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 50,

        borderWidth: 1,
      }}
    >
        <Image
          style={{
            width: width - 50,
            height: height / 3,
            borderRadius: 20,
            borderWidth: 1,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`,
          }}
        />

      <Text
        style={{
          fontSize: 22,
          margin: 10,
          color: "white",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        {title}
      </Text>
      <Text style={{ margin: 10, fontFamily: "sans-serif", color: "white" }}>
        {overview}
      </Text>
      <Text
        style={{
          margin: 10,
          fontSize: 18,
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {date}
      </Text>
    </View>
  );
};

export default Movie

const styles = StyleSheet.create({})