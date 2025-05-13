import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles/styles.js";

const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function ForgetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      Alert.alert("Please enter your email address.");
      return;
    }
    setSubmitted(true);
    // Here you would typically trigger your password reset logic (API call)
  };

  return (
    <View style={styles.safeContainer}>
      <SafeAreaView style={styles.container}>
        <View style={localStyles.content}>
          <Text style={localStyles.title}>Forgot Password?</Text>
          <Text style={localStyles.subtitle}>
            Enter your email address and we'll send you a link to reset your password.
          </Text>
          <TextInput
            style={localStyles.input}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity
            style={localStyles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={localStyles.submitButtonText}>Send Reset Link</Text>
          </TouchableOpacity>
          {submitted && (
            <Text style={localStyles.successText}>
              If this email is registered, a reset link has been sent.
            </Text>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 8 : 10,
    marginBottom: 10,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
    marginRight: 10,
  },
  backButtonTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#e71b1b",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  submitButton: {
    backgroundColor: "#FF5500",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  successText: {
    color: "#2ecc40",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});