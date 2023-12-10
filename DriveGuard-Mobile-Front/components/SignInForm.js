// SignInForm.js
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, fontFamily } from "../GlobalStyles"; // Import your colors here
import axios from "axios";
import { base_url } from "../server.json";

const SignInForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  const handleSignIn = async () => {
    try {
      const res = await axios.post("http://172.17.4.128:3500/user/login", {
        email: email.toLowerCase(),
        password: password.trim(),
      });

      navigation.navigate("FaceID");
    } catch (error) {
      setError(error.response.data.message);
      // console.error('Error during sign-in:', error);
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Welcome Back</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.custom400}
          style={[styles.input, { color: colors.custom400 }]}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.custom400}
          style={[styles.input, { color: colors.custom400 }]}
          secureTextEntry={true}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={[styles.forgotPasswordText, { color: colors.white }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
  },
  formTitle: {
    fontSize: 24,
    fontFamily: fontFamily.bold700,
    color: colors.white,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.custom300,
    backgroundColor: colors.custom100,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: "100%",
    fontSize: 16,
  },
  label: {
    color: colors.white,
    marginTop: 5,
    textAlign: "left",
    fontFamily: fontFamily.medium500,
    fontSize: 14,
  },
  button: {
    backgroundColor: colors.secondary,
    width: "100%",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fontFamily.semiBold600,
  },
  forgotPasswordButton: {
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontFamily: fontFamily.medium500,
  },
  iconMedia: {
    width: 250.76,
    height: 80,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default SignInForm;
