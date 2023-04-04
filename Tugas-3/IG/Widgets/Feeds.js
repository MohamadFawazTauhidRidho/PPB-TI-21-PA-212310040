import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Feeds = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../assets/icons/icon-boy-1.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>Fawaz</Text>
      </View>

      <View>
        <Image
          source={require("../../assets/feeds/feed1.jpg")}
          style={styles.feeds}
        />
      </View>

      <View style={styles.icon}>
        <Image source={require("../../assets/icons/icon-heart.png")} />

        <View style={{ marginHorizontal: 10 }}>
          <Image source={require("../../assets/icons/comment.png")} />
        </View>
        <Image source={require("../../assets/icons/icon-paper-plane.png")} />
      </View>
      <View style={styles.icon}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Fawaz</Text>
        </View>
        <Text>Roti bundar yang berisi olahan daging (patty)</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../assets/icons/icon-boy-1.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>Raffi</Text>
      </View>

      <View>
        <Image
          source={require("../../assets/feeds/feed2.jpg")}
          style={styles.feeds}
        />
      </View>

      <View style={styles.icon}>
        <Image source={require("../../assets/icons/icon-heart.png")} />

        <View style={{ marginHorizontal: 10 }}>
          <Image source={require("../../assets/icons/comment.png")} />
        </View>
        <Image source={require("../../assets/icons/icon-paper-plane.png")} />
      </View>
      <View style={styles.icon}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Raffi</Text>
        </View>
        <Text>Kini hadir makanan kemasan untuk kelinci</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 2
  },
  username: {
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  feeds: {
    height: 500,
    width: 450,
    alignContent: "center",
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
});

export default Feeds;
