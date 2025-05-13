import React from "react";
import { styles } from "../styles/styles.js"; // Assuming you want to use shared styles
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

const statusBarHeight =
  Platform.OS === "android"
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

export default function SettingsPage() {
  const router = useRouter();

  const settingsOptions = [
    { title: "Account", action: () => router.push('/account') },
    { title: "Notifications", action: () => router.push('/notifications') },
    { title: "Privacy", action: () => router.push('/privacy') },
    { title: "Help & Support", action: () => router.push('/helpandsupport') },
    { title: "About", action: () => router.push('/about') },
    { title: "Logout", action: () => router.push('/logout') },
  ];

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={localStyles.header}>
          <Text style={localStyles.headerTitle}>Settings</Text>
        </View>

        {/* Settings Options List */}
        <ScrollView style={localStyles.optionsList}>
          {settingsOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={localStyles.optionItem}
              onPress={option.action}
            >
              <Text style={localStyles.optionText}>{option.title}</Text>
              <Text style={localStyles.optionArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center", // Center title
    marginTop: Platform.OS === "ios" ? 8 : 10, // Consistent top margin
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  optionsList: {
    flex: 1,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionText: {
    fontSize: 18,
  },
  optionArrow: {
    fontSize: 20,
    color: "#ccc",
  },
});