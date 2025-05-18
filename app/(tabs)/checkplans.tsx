import { MiMapView } from "@mappedin/react-native-sdk";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "../../assets/styles/styles.js";

export default function CheckPlans() {
  const router = useRouter();
  const mapRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(null);
  // Optimized options for mobile devices
const options = {
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
  venue: 'mappedin-demo-mall',
  perspective: 'Website',
  // Mobile optimizations
  antialias: Platform.OS === 'android', // Enable only on iOS for performance
  backgroundColor: '#FFFFFF',
  maxHorizontalFov: 120,
  gestureMaxZoom: 3,
  gestureMinZoom: 0.5,
  floorFilterEnabled: true
};
  
  const handleMapLoaded = () => {
    console.log("Map loaded successfully!");
    setIsMapLoaded(true);
  };

 
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
        <View style={localStyles.mapPlaceholder}>
            <View style={localStyles.mapErrorContainer}>
              <Text style={localStyles.mapErrorText}>Error: {mapError}</Text>
              <TouchableOpacity 
                style={localStyles.retryButton}
                onPress={() => {
                  setMapError(null);
                  // Force re-render of the map
                  mapRef.current?.reload();
                }}>
                <Text style={localStyles.retryButtonText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
                <View style={localStyles.loadingContainer}>
                  <ActivityIndicator size="large" color="#0000ff" />
                  <Text style={localStyles.loadingText}>Loading map...</Text>
                </View>
              )
              <MiMapView 
                ref={mapRef}
                style={{ flex: 1 }} 
                options={options} 
                onFirstMapLoaded={handleMapLoaded}
              />
            </>
          
        </View>
      </SafeAreaView>
    </View>
  );
}
const localStyles = StyleSheet.create({
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 10
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333'
  },
  mapErrorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mapErrorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 15
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
  }
}); 