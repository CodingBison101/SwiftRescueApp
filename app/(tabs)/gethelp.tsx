import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';

export default function GetHelpPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} onPress={() => router.back()}>Get help!</Text>
      </View>
      
      {/* Shield Icon */}
      <View style={styles.iconContainer}>
        <Image 
          source={require('../../assets/images/get_help_icons/shieldicon.png')} 
          style={styles.shieldIconImage}
          resizeMode="contain"
        />
      </View>
      
      {/* Help Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
            <Image 
              source={require('../../assets/images/get_help_icons/3916603 1.png')} 
              style={styles.optionIconImage}
              resizeMode="contain"
            />
          <Text style={styles.optionText}>      Chat with Rescuers</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
            <Image 
              source={require('../../assets/images/get_help_icons/brand-github-copilot_.png')} 
              style={styles.optionIconImage}
              resizeMode="contain"
            />
          <Text style={styles.optionText}>      Chat-bot</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton}>
            <Image 
              source={require('../../assets/images/get_help_icons/video-play-button.png')} 
              style={styles.optionIconImage}
              resizeMode="contain"
            />
            <Text style={styles.optionText}>     First-aid videos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
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