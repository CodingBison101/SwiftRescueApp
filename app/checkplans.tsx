import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const statusBarHeight = Platform.OS === 'android' 
  ? Constants.statusBarHeight 
  : StatusBar.currentHeight || 0;

export default function CheckPlans() {
  const router = useRouter();

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        {/* Status Banner */}
        <View style={styles.statusBanner}>
          <Text style={styles.statusTitle}>Fire service team is on the way</Text>
          <Text style={styles.statusSubtitle}>Arriving in 5 minutes</Text>
        </View>

                <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>Map Goes Here</Text>
          <Text style={styles.mapPlaceholderSubtext}>To be implemented in the Future</Text>
                  </View>

                <View style={styles.profileContainer}>
          <Image 
            source={require('../assets/images/SillyGifs.gif')} 
            style={styles.profileImage}
            defaultSource={require('../assets/images/icon.png')} // Fallback to app icon if profile image is missing
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Robert willam</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonIcon}>📞</Text>
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
});