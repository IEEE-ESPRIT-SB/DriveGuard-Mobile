import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import { colors, fontFamily, fontSize } from "../GlobalStyles";
import face from "../assets/face.png";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const DecFaceID = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const rotationValue = new Animated.Value(0);

  const handlePress = () => {
    // Toggle the state when the button is pressed
    setIsPressed(!isPressed);
  };

  useEffect(() => {
    // Rotate animation
    if (isPressed) {
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        navigation.navigate("FaceID", {
          retry: true
        });
      }, 500);
    }
  }, [isPressed, rotationValue]);

  const spin = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Image source={face} style={styles.image} />
      <View style={styles.content}>
        <Feather name="alert-circle" size={64} color={colors.red} />
        <View>
          <Text style={styles.title}>
            LOCK<Text style={{ color: colors.red }}>ID</Text>
          </Text>
          <Text
            style={[
              styles.title,
              {
                fontFamily: fontFamily.light,
                color: colors.red,
                fontSize: fontSize["2xl"],
              },
            ]}
          >
            Declined
          </Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <AntDesign name="reload1" size={30} color="black" />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    paddingHorizontal: 20,
    paddingVertical: 100,
  },

  content: {
    backgroundColor: colors.custom400,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  image: {
    width: 190,
    height: 270,
  },
  title: {
    color: colors.white,
    fontSize: fontSize["4xl"],
    fontFamily: fontFamily.bold700,
    textAlign: "center",
  },

  subTitle: {
    color: colors.white,
    fontSize: fontSize.md,
    fontFamily: fontFamily.regular400,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.secondary,
    width: 250,
    height: 50,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.md,
    fontFamily: fontFamily.semiBold600,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
});

export default DecFaceID;
