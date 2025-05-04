import React from "react";
import { styles, colors } from "../styles/styles.js";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusBarHeight =
  Platform.OS === "android"
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

export default function CheckPlans() {
  const router = useRouter();

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        {/* Status Banner */}
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

/*const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
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
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBanner: {
    backgroundColor: '#FF5757',
    padding: 10,
    // Additional top margin for safety
    marginTop: Platform.OS === 'android' ?  0 : 10,
  },
  statusTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusSubtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapPlaceholderText: {
    fontSize: 24,
    color: '#888',
    marginBottom: 10,
  },
  mapPlaceholderSubtext: {
    fontSize: 16,
    color: '#AAA',
  },
  routeIndicator: {
    position: 'absolute',
    width: 4,
    height: windowHeight * 0.4,
    backgroundColor: '#FF5757',
    top: '25%',
    right: '45%',
  },
  profileContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DDD',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  callButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF5757',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButtonIcon: {
    fontSize: 24,
    color: 'white',
  },
});*/
