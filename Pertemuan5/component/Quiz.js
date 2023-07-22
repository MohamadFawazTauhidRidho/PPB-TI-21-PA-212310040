import React, { useState } from "react";
import { Image, View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-web";

const Quiz = () => {
  const [title, setTitle] = useState("Quiz-2");
  const [validTitle, setValidTitle] = useState("");
  const handlerTitle = (value) => {
    if (value) {
      setValidTitle = value;
    } else {
      setValidTitle = "Silahkan isi";
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" }} style={styles.profile} />
        <Text>Saat ini sedang berlangsung</Text>
        <Text>{title}</Text>
      </View>
      <View style={{ marginTop: 20, width: 300 }}>
        <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: "bold" }}>Masukan Text</Text>
        <TextInput style={{ borderRadius: 5, borderWidth: 1, padding: 11 }} placeholder="Input Your Text" defaultValue={title} onChangeText={(text) => handlerTitle(text)} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, padding: 11, marginHorizontal: 20, width: 100, textAlign: "center", backgroundColor: "purple" }} onChangeText={() => handlerTitle("")}>
          <Text style={{ color: "white" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1, padding: 11, marginHorizontal: 20, width: 100, textAlign: "center", backgroundColor: "purple" }}>
          <Text style={{ color: "white" }} onPress={() => handlerTitle()}>
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  btn_signin: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btn_signin_text: { color: "white", textAlign: "center", fontSize: 16 },
});

export default Quiz;
