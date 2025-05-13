import React from "react";
import { styles } from "../styles/styles.js";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

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

        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>Map Goes Here</Text>
          <Text style={styles.mapPlaceholderSubtext}>
            We Wait for uncle Islam.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
