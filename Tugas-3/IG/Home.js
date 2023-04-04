import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Header from "./Widgets/Header";
import Story from "./Widgets/Story";
import { UsersObj } from "./Widgets/ConstData";
import Feeds from "./Widgets/Feeds";

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
        <StatusBar hidden={false} />
        <Header />
        <View style={{ flex: 10 }}>
          <ScrollView style={{ flex: 2, backgroundColor: "black"}}>
            <Story UsersObj={UsersObj} />
            <Feeds />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
