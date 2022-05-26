import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Dimensions,
  LazyLoading
} from "react-native";
import React, { useState, useEffect } from "react";
import Movie from "./Movie"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;




const MoviesList = () => {
  // managing state with 'useState'
  const [data, setData] = useState([]);

  const [movie, setMovie] = useState([]);

  const [page, setPage] = useState(499);

  const [isLoading, setLoading] = useState(true);
 // get data from this URL!

  const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${page}`;

  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json);

        setMovie(json.results);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, [page]);


  
  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ backgroundColor: "#38042C" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: width,
              marginTop: 10,
            }}
          >
            {page == 1 ? null : (
              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => {
                    page > 1 ? setPage(page - 1) : setPage(page);
                  }}
                >
                  <Text style={{ color: "white" }}>see prev</Text>
                </TouchableOpacity>
              </View>
            )}
            {page < 500 ? (
              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => {
                    page < 500 ? setPage(page + 1) : setPage(page);
                  }}
                >
                  <Text style={{ color: "white" }}>see more</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
            <FlatList
              data={movie}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Movie
                  title={item.title}
                  overview={item.overview}
                  date={item.release_date}
                  poster_path={item.poster_path}
                />
              )}
            />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn:{
    backgroundColor:"#38042C",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    width: width/2-40,
    height:50,
    margin:10,
    alignItems: "center",
    justifyContent: "center",
  }
});
