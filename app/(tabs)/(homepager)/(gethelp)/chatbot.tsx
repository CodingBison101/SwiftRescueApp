import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const statusBarHeight =
  Platform.OS === 'android'
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

export default function ChatBotScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        {/* <View style={globalStyles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()} style={globalStyles.backButtonContainer}>
            <Text style={globalStyles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={globalStyles.headerTitle}>Chat-Bot</Text>
          <View style={{ width: 50 }} /> 
        </View> */}
        <Text style={styles.title}>Chat-Bot</Text>
        <Text>Implement your chat-bot interface here.</Text>
        {/* Add chat-bot UI components */}
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