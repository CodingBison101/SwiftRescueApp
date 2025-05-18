import React from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet, Platform, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "You have been logged out (placeholder).");
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/settings')}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Logout</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Confirm Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 8 : 10,
    marginBottom: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginRight: 10,
  },
  backArrow: { fontSize: 24, color: "#000", marginRight: 8 },
  backText: { fontSize: 18, color: "#333" },
  title: { fontSize: 22, fontWeight: "600" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  logoutButton: {
    backgroundColor: "#FF5500",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});