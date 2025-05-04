import React, { useState } from "react";
import { styles, colors } from "./styles/styles.js";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      router.replace("/(tabs)");
    } else {
      Alert.alert("Error", "Please enter both username and password");
    }
  };

  return (
    <SafeAreaView style={localStyles.Container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF5500" />

      <View style={styles.topSection}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.belowText}>Below</Text>
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
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={localStyles.iconContainer}>
            <Text style={styles.inputIcon}>👁️</Text>
          </View>
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

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={localStyles.Button}
          onPress={handleLogin}
        >
          <Text style={localStyles.LoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText:{
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  Button:{
    backgroundColor: "#FF5500",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
  }
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
