import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../../assets/styles/styles.js";

const windowWidth = Dimensions.get("window").width;

const statusBarHeight =
  Platform.OS === "android"
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

export default function App() {
  const router = useRouter();
  const [featureModalVisible, setFeatureModalVisible] = useState(false);
  const [featureTitle, setFeatureTitle] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const showFeature = (
    title: React.SetStateAction<string>,
    description: React.SetStateAction<string>
  ) => {
    setFeatureTitle(title);
    setFeatureDescription(description);
    setFeatureModalVisible(true);
  };

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.appTitleContainer}>
            <Image
              source={require("../../../assets/images/icon.png")}
              style={styles.appIcon}
            />
            <Image
              source={require("../../../assets/images/title.png")}
              style={styles.appTitle}
            />
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.indexButton}
            onPress={() => router.push("/emergencycases")}
          >
            <Text style={styles.loginButtonText}>
              View Emergency Cases
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.indexButton}
            onPress={() => router.push("/chat-victim")}
          >
            <Text style={styles.loginButtonText}>Chat With Victims</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.indexButton}
            onPress={() => router.push("/declare_alarm")}
          >
            <Text style={styles.loginButtonText}>
              Declare Hazard
            </Text>
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
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
    // Additional top margin for safety
    marginTop: Platform.OS === 'android' ? 0 : 8,
  },
  appTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
  },
  appIcon: {
    width: 50,
    height: 50,
  },
  appTitle: {
    width: 130,
    height: 50,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 22,
    marginRight: 10,
  },
  loginIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  buttonGrid: {
    width: windowWidth,
    height: '80%', // Reduced from 85% to ensure it fits
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginTop: 10, // Added margin to ensure spacing from header
  },
  row: {
    width: '100%',
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
  },
  gridButton: {
    backgroundColor: '#FF5500',
    width: '48%',
    height: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%',
    marginVertical: '1%',
  },
  gridButtonText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  centerButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 180,
    height: 180,
    marginLeft: -90,
    marginTop: -90,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  centerButton: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#e71b1b',
    borderWidth: 10,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  centerButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  modalSingleButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#e71b1b',
  },
  confirmButtonText: {
    color: 'white',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  cancelButtonText: {
    color: '#333',
  },
});*/
