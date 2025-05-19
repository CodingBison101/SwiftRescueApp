import * as Font from "expo-font";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Add this import
import { styles } from "../../assets/styles/styles.js";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 1. Add state
  const router = useRouter();

  useEffect(() => {
    Font.loadAsync({
      "ADLaM Display": require("../../assets/fonts/ADLaMDisplay-Regular.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  const handleLogin = () => {
    if (username && password) {
      router.push('/(tabs)/(meat)/checkplans');
    } else {
      alert("Please enter both username and password");
    }
  };

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={localStyles.Container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF5500" />
      <View style={localStyles.header}>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.topSection}>
        <Text
          style={{
            marginLeft: -150,
            alignSelf: "center",
            color: "white",
            fontSize: 75,
            fontFamily: "ADLaM Display",
          }}
        >
          Login
        </Text>
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: 75,
            marginLeft: 70,
            fontFamily: "ADLaM Display",
          }}
        >
          Below
        </Text>
      </View>
      <View style={styles.formSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email or Username"
            value={username}
            onChangeText={setUsername}
          />
          <View style={localStyles.iconContainer}>
            <Text style={styles.inputIcon}>✉️</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={!showPassword} // 2. Use state here
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={localStyles.iconContainer}
            onPress={() => setShowPassword((prev) => !prev)} // 3. Toggle state
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-outline" : "eye-off-outline"} // 4. Change icon
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
            >
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.rememberText}>Remember Me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/forgetpassword")}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={localStyles.Button} onPress={handleLogin}>
          <Text style={localStyles.LoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  header: {
    backgroundColor: "#FF5500",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  Button: {
    backgroundColor: "#FF5500",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
  },
});
/*
const styles = StyleSheet.create({
  topSection: {
    backgroundColor: "#FF5500",
    height: "35%",
    justifyContent: "center",
    paddingLeft: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  loginText: {
    color: "white",
    fontSize: 75,
    fontFamily: "Instrument Sans",
  },
  belowText: {
    color: "white",
    fontSize: 75,
    marginLeft: 110,
    fontFamily: "Instrument Sans",
  },
  formSection: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
    position: "relative",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    paddingRight: 40,
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  inputIcon: {
    fontSize: 20,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF8866",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#FF8866",
  },
  checkmark: {
    color: "white",
    fontSize: 14,
  },
  rememberText: {
    fontSize: 14,
  },
  forgotText: {
    color: "#FF8866",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#FF5500",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});*/
