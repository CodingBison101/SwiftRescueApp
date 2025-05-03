import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Modal,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' 
  ? Constants.statusBarHeight 
  : StatusBar.currentHeight || 0;

export default function CallForHelpPage() {
  const router = useRouter();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [confirmType, setConfirmType] = useState<'self' | 'others' | null>(null);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  
  const caseOptions = [
    'Stuck',
    'In Danger',
    'Depressed',
    'Happy',
    'Other'
  ];

  const handleCaseSelection = (caseType: string) => {
    setSelectedCase(caseType);
  };

  const handleSelfAlert = () => {
    if (!selectedCase) {
      alert('Please select your case first');
      return;
    }
    setConfirmType('self');
    setConfirmModalVisible(true);
  };

  const handleAlertForOthers = () => {
    if (!selectedCase) {
      alert('Please select your case first');
      return;
    }
    setConfirmType('others');
    setConfirmModalVisible(true);
  };

  const handleConfirm = () => {
    setConfirmModalVisible(false);
    
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 300);
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
    router.back();
  };

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.caseSection}>
          <Text style={styles.caseTitle}>What is your case:</Text>
          
          {caseOptions.map((caseType, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.caseOption, 
                selectedCase === caseType && styles.selectedCaseOption
              ]}
              onPress={() => handleCaseSelection(caseType)}
            >
              <Text style={styles.caseOptionText}>{caseType}</Text>
              <Text style={styles.arrowIcon}>{selectedCase === caseType ? '▼' : '▼'}</Text>
            </TouchableOpacity>
          ))}
          
          {/* Action buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={handleSelfAlert}
            >
              <View style={styles.userIcon}>
                <Text style={styles.iconText}>👤</Text>
              </View>
              <Text style={styles.actionButtonText}>Self-alert</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={handleAlertForOthers}
            >
              <View style={styles.groupIcon}>
                <Text style={styles.iconText}>👥</Text>
              </View>
              <Text style={styles.actionButtonText}>Alert for others</Text>
            </TouchableOpacity>
          </View>
          
          {/* Alarm icon at bottom */}
          <View style={styles.alarmIconContainer}>
            <Text style={styles.alarmIcon}>🚨</Text>
          </View>
        </View>

        {/* Confirmation Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={confirmModalVisible}
          onRequestClose={() => setConfirmModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirm Alert</Text>
              <Text style={styles.modalText}>
                {confirmType === 'self' 
                  ? 'Are you sure you want to alert authorities about your situation?' 
                  : 'Are you sure you want to alert authorities on behalf of someone else?'}
              </Text>
              
              <View style={styles.modalButtons}>
                <TouchableOpacity 
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setConfirmModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={handleConfirm}
                >
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Success Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={successModalVisible}
          onRequestClose={closeSuccessModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.successIcon}>✅</Text>
              <Text style={styles.modalTitle}>Alert Sent</Text>
              <Text style={styles.modalText}>
                Thank you, Authorities have been alerted.
              </Text>
              
              <View style={styles.modalSingleButton}>
                <TouchableOpacity 
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={closeSuccessModal}
                >
                  <Text style={styles.confirmButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    // Add extra padding for Android devices
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  caseSection: {
    flex: 1,
    padding: 20,
  },
  caseTitle: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 20,
  },
  caseOption: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCaseOption: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  caseOptionText: {
    fontSize: 18,
  },
  arrowIcon: {
    fontSize: 16,
    color: '#888',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  actionButton: {
    backgroundColor: '#FF5500',
    borderRadius: 10,
    padding: 15,
    width: '45%',
    alignItems: 'center',
  },
  userIcon: {
    marginBottom: 8,
  },
  groupIcon: {
    marginBottom: 8,
  },
  iconText: {
    fontSize: 24,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  alarmIconContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  alarmIcon: {
    fontSize: 60,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
  confirmButton: {
    justifyContent: 'center',
    backgroundColor: '#FF5500',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalSingleButton: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  successIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
});