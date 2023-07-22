import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CalendarFirstWeek from "./MyCalendar";

const CardMenu = () => {
  const menuList = [
    { id: 1, name: "Attendance", icon: "calendar-check" },
    { id: 2, name: "Hot Line", icon: "headset" },
    { id: 3, name: "Actifity", icon: "chart-line" },
    { id: 4, name: "PCF", icon: "edit" },
    { id: 5, name: "Counselor", icon: "comments" },
    { id: 6, name: "Others", icon: "ellipsis-h" },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#ECF2FF" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: "https://www.kindpng.com/picc/m/699-6999322_business-man-icon-png-business-man-transparent-png.png" }} style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 2, borderColor: "purple" }} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Muhammad Alfan</Text>
            <Text>212310017</Text>
          </View>
        </View>
        <View style={{ borderRadius: 100 }}>
          <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/014/301/057/original/3d-bell-sounds-for-message-notification-scheduled-activities-png.png" }} style={{ width: 55, height: 55 }} />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <View style={styles.CardBox}>
          {menuList.map((v, index) => (
            <MenuItem item={v} key={index} />
          ))}
        </View>
      </View>

      {/* Calendar */}
      <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: 30 }}>
        <View style={{ alignItems: "center"}}>
          <View style={{ borderRadius: 20, width: 350, borderWidth:2, borderColor:"purple", marginTop:20 }}>
            <CalendarFirstWeek />
          </View>
        </View>
        <View style={{paddingHorizontal:30, marginTop:20}}>
          <Text style={{ fontWeight: "bold" }}>Schedule for today</Text>
          <Text>No record found</Text>
        </View>
      </View>

      {/* Schedule */}
    </View>
  );
};

export default CardMenu;

const MenuItem = ({ item }) => {
  return (
    <View style={styles.card_item}>
      <View style={styles.card_item}>
        <FontAwesome5 name={item.icon} size={35} color={"purple"} />
      </View>
      <Text style={styles.card_text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CardBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    paddingHorizontal: 20,
    width: 350,
  },
  card_item: {
    width: 70,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  card_icon: { marginBottom: 10 },
  card_text: { color: "purple", fontSize: 14 },
});
