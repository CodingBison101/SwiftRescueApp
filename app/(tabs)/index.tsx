import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  SafeAreaView,
  StatusBar,
  Alert,
  Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const router = useRouter();
  const [featureModalVisible, setFeatureModalVisible] = useState(false);
  const [featureTitle, setFeatureTitle] = useState('');
  const [featureDescription, setFeatureDescription] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const showFeature = (title: string, description: string) => {
    setFeatureTitle(title);
    setFeatureDescription(description);
    setFeatureModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Login Button - Changed to match image */}
      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/login')}>
          <Text style={styles.loginButtonText}>
            Login
          </Text>
          <Text style={styles.loginIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Main Grid Buttons - Updated layout to be more rectangular */}
      <View style={styles.buttonGrid}>
        {/* Top Row */}
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.gridButton} 
            onPress={() => showFeature('Check Plans', 'View and manage your emergency plans and protocols.')}>
            <Text style={styles.gridButtonText}>Check Plans</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.gridButton}
            onPress={() => router.push('/gethelp')}>
            <Text style={styles.gridButtonText}>Get Help</Text>
          </TouchableOpacity>
        </View>
        
        {/* Center Emergency Button */}
        <View style={styles.centerButtonContainer}>
          <TouchableOpacity 
            style={styles.centerButton}
            onPress={() => router.push('/callforhelp')}>
            <Text style={styles.centerButtonText}>Call{'\n'}for{'\n'}Help</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom Row */}
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.gridButton}
            onPress={() => showFeature('Declare Alarm', 'Initiate alarm protocols for your organization.')}>
            <Text style={styles.gridButtonText}>Declare{'\n'}alarm</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.gridButton}
            onPress={() => showFeature('Hazards Information', 'View current hazards and safety warnings in your area.')}>
            <Text style={styles.gridButtonText}>Get{'\n'}Hazards{'\n'}Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature Modal - No changes */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={featureModalVisible}
        onRequestClose={() => setFeatureModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{featureTitle}</Text>
            <Text style={styles.modalText}>{featureDescription}</Text>
            
            <View style={styles.modalSingleButton}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]}
                onPress={() => setFeatureModalVisible(false)}>
                <Text style={styles.confirmButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Updated styles to connect buttons and enlarge center button
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingRight: 15,
    marginBottom: 10,
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
    height: '85%',  // Increased height to fill more of the screen
    flexDirection: 'column',
    justifyContent: 'center', // Changed to center to remove gap
    alignItems: 'center',
    paddingHorizontal: 4, // Small padding for margins
  },
  row: {
    width: '100%',
    height: '45%', // Increased height of rows
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0, // Remove vertical margin between rows
  },
  gridButton: {
    backgroundColor: '#FF5500',
    width: '48%',
    height: '98%', // Slightly reduced to allow minimal margin
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%',
    marginVertical: '1%', // Minimal vertical margin to create visual separation
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
    width: 180, // Increased from 150
    height: 180, // Increased from 150
    marginLeft: -90, // Half of width
    marginTop: -90, // Half of height
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  centerButton: {
    width: 180, // Increased from 150
    height: 180, // Increased from 150
    borderRadius: 90, // Half of width/height
    backgroundColor: '#e71b1b',
    borderWidth: 10, // Increased from 8
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Increased shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  centerButtonText: {
    color: 'white',
    fontSize: 30, // Increased from 26
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
});
