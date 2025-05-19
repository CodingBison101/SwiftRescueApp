import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../assets/styles/styles.js";

export default function CheckPlans() {
  const router = useRouter();

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.appTitleContainer}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.appIcon}
            />
            <Image
              source={require("../../assets/images/title.png")}
              style={styles.appTitle}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
            <Text style={styles.loginIcon}>👤</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Image
              source={require("../../assets/images/mapplaceholder.jpg")}
              style={{width: "100%", height: "100%", borderRadius: 12}}
            />
        </View>
      </SafeAreaView>
    </View>
  );
}
const localStyles = StyleSheet.create({
  mapPlaceholder: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    zIndex: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  mapErrorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mapErrorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 15,
  },
  retryButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
  },
});
