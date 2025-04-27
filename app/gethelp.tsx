import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' 
  ? Constants.statusBarHeight 
  : StatusBar.currentHeight || 0;

export default function GetHelpPage() {
  const router = useRouter();

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButtonContainer}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>←</Text>
            <Text style={styles.headerTitle}>Back</Text>
          </TouchableOpacity>
        </View>
        
        {/* Shield Icon */}
        <View style={styles.iconContainer}>
          <Image 
            source={require('../assets/images/get_help_icons/shieldicon.png')} 
            style={styles.shieldIconImage}
            resizeMode="contain"
          />
        </View>
        
        {/* Help Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
              <Image 
                source={require('../assets/images/get_help_icons/3916603 1.png')} 
                style={styles.optionIconImage}
                resizeMode="contain"
              />
            <Text style={styles.optionText}>      Chat with Rescuers</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton}>
              <Image 
                source={require('../assets/images/get_help_icons/brand-github-copilot_.png')} 
                style={styles.optionIconImage}
                resizeMode="contain"
              />
            <Text style={styles.optionText}>      Chat-bot</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton}>
              <Image 
                source={require('../assets/images/get_help_icons/video-play-button.png')} 
                style={styles.optionIconImage}
                resizeMode="contain"
              />
              <Text style={styles.optionText}>     First-aid videos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

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
header: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingBottom: 15,
  marginTop: Platform.OS === 'ios' ? 8 : 10,
  paddingTop: 15,
},
backButtonContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 25, // This creates the cylinder shape
  borderWidth: 1,
  borderColor: '#e0e0e0',
},
backButton: {
  // Removed as we're now using backButtonContainer
},
backButtonText: {
  fontSize: 24,
  color: '#000',
  marginRight: 10,
},
headerTitle: {
  fontSize: 28,
  fontWeight: '500',
  color: '#333',
},
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
});