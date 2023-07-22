import React, { Component } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

class Latihan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "IBI Kesatuan",
      subTitle: "Bogor Indonesia",
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Image source={require("../assets/IBIKLOGO.png")} />
          <View>
            <Text>{this.state.title}</Text>
            <Text>{this.state.subTitle}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Change Logo</Text>
          </View>
          <View>
            <Text>Title</Text>
            <TextInput placeholder="Enter title here" defaultValue={this.state.title} onChangeText={(text) => this.setState({ title: text })} />
          </View>
          <View>
            <Text>Sub Title</Text>
            <TextInput placeholder="Enter sub title here" defaultValue={this.state.subtitle} onChangeText={(text) => this.setState({ aubTitle: text })} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Latihan;
