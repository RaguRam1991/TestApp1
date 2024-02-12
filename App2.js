
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const img =
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=sph";
//const img2 = require("./App/assets/images/dashboard/like.png");
const img3 = require("./nature_wallpaper.jpg"); // like.png
const App2 = () => {
  return (
    <View style={styles.container}>
      <Text>App2</Text>
      <Image style={{ height: "30%", width: "50%" }} source={{ uri: img }} />
      <Image
        style={{ height: "30%", width: "50%", marginTop: 20 }}
        source={img3}
      />
    </View>
  );
};

export default App2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
