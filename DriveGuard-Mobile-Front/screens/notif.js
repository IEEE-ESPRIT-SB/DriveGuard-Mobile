import * as React from "react";
import antitheft from "../assets/antitheft.png";
import { Text, StyleSheet, Image, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, fontFamily, fontSize } from "../GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; 

const Accepted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AntDesign name="close" size={20} color="white" style={styles.x} />
        <View style={{ flexDirection: "column", gap: 30 }}>
          <Ionicons
            name="notifications-off"
            size={70}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.text}>
            Notifications on your phone are turned off.Put your phone in front
            of you and please lock it.
          </Text>
          <Image source={antitheft} style={styles.image} />
          <Text style={styles.text}>
            The antitheft bar is unlocked successfuly !
          </Text>
        <Text></Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    width:"100%",height:200
  },

  container: {
    backgroundColor: colors.custom400,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  card: {
    backgroundColor: colors.custom200,
    padding: 35,
    borderRadius: 20,
  },
  x: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  icon: {
    alignSelf: "center",
  },
  description: {
    fontSize: fontSize.md,
  },
  text: {
    color: colors.white,
    fontFamily: fontFamily.semiBold600,
  },
});
export default Accepted;
