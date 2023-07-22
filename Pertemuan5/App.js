import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Latihan from "./component/Latihan";
import Quiz from "./component/Quiz.js";
import SignIn from "./component/SignIn";
import CardMenu from "./component/CardMenu";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignIn />;
    </SafeAreaView>
  );
}
