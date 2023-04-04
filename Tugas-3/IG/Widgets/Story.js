import React from "react";
import { View, StyleSheet, Image, FlatList, Text } from "react-native";

const UserItem = ({ item }) => {
  return (
    <View>
      <Image
        source={
          item.gender === "m"
            ? require("../../assets/icons/icon-boy-1.png")
            : require("../../assets/icons/icon-girl-1.png")
        }
        style={{ ...styles.img, borderWidth: item.story ? 2 : 0 }}
      />
      <Text style={styles.storyName}>{item.name}</Text>
    </View>
  );
};

const Story = ({ UsersObj }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <FlatList horizontal={true} data={UsersObj} renderItem={({ item }) => <UserItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderColor: "white",
    borderRadius: 100,
  },

  storyName: {
    textAlign: "center",
    fontSize: 13,
    color: "white",
  },
});

export default Story;
