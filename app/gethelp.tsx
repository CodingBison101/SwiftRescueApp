import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles/styles.js";

const statusBarHeight =
  Platform.OS === "android"
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

export default function GetHelpPage() {
  const router = useRouter();

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/images/get_help_icons/shieldicon.png")}
            style={styles.shieldIconImage}
            resizeMode="contain"
          />
        </View>

        {/* Help Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/chat-rescuer")}
          >
            <Image
              source={require("../assets/images/get_help_icons/3916603 1.png")}
              style={styles.optionIconImage}
              resizeMode="contain"
            />
            <Text style={styles.optionText}>Chat with Rescuers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/chatbot")}
          >
            <Image
              source={require("../assets/images/get_help_icons/brand-github-copilot_.png")}
              style={styles.optionIconImage}
              resizeMode="contain"
            />
            <Text style={styles.optionText}>Chat-bot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/first-aid-videos")}
          >
            <Image
              source={require("../assets/images/get_help_icons/video-play-button.png")}
              style={styles.optionIconImage}
              resizeMode="contain"
            />
            <Text style={styles.optionText}>First-aid videos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
/*
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // Add extra padding for Android devices
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Update these style definitions
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  shieldIconImage: {
    width: 120,
    height: 120,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#FF5500',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF5500',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  optionIconImage: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});*/
