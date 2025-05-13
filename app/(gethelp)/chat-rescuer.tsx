import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { styles as globalStyles } from '../styles/styles'; // Assuming you might want to use global styles

const statusBarHeight =
  Platform.OS === 'android'
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

export default function ChatRescuerScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        {/* You can add a header here if needed, e.g., with a back button */}
        {/* <View style={globalStyles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()} style={globalStyles.backButtonContainer}>
            <Text style={globalStyles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={globalStyles.headerTitle}>Chat with Rescuer</Text>
          <View style={{ width: 50 }} /> 
        </View> */}
        <Text style={styles.title}>Chat with Rescuer</Text>
        <Text>Implement your real-time chat functionality here.</Text>
        {/* Add chat UI components */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});