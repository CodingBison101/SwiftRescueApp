import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
// Assuming your global styles are in './styles/styles.js'
// You might need to adjust the import path or use local styles
import { styles as globalStyles } from "./styles/styles.js";


// Sample items for the picker
const alarmTypes = [
  { label: "Fire", value: "fire" },
  { label: "Medical Emergency", value: "medical" },
  { label: "Accident", value: "accident" },
  { label: "Suspicious Activity", value: "suspicious_activity" },
  { label: "Other", value: "other" },
];

export default function DeclareAlarmPage() {
  const router = useRouter();
  const [selectedAlarmType, setSelectedAlarmType] = useState<string | null>(
    null
  );
  const [image, setImage] = useState<string | null>(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false); // Added for new success modal

  const pickImage = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!selectedAlarmType) {
      alert("Missing Information"); // Changed alert to Alert.alert
      return;
    }
    // Add any other validation if needed (e.g., image required)
    setConfirmModalVisible(true);
  };

  const handleConfirmSubmission = () => {
    // Here you would typically send the data to your backend
    console.log("Submitting:", {
      alarmType: selectedAlarmType,
      imageUri: image,
    });
    setConfirmModalVisible(false);
    setSuccessModalVisible(true); // Show new success modal

    // Reset form fields here or in closeSuccessModal
    setSelectedAlarmType(null);
    setImage(null);
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
    router.back(); // Or navigate to a home screen
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Declare Alarm</Text>
          <View style={{ width: 40 }} /> {/* Spacer for centering title */}
        </View>

        <Text style={styles.label}>Type of Alarm:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedAlarmType(value)}
          items={alarmTypes}
          style={pickerSelectStyles}
          placeholder={{ label: "Select an alarm type...", value: null }}
          value={selectedAlarmType}
        />

        <Text style={styles.label}>Attach Photo (Optional):</Text>
        <View style={styles.imageButtonsContainer}>
          <TouchableOpacity
            style={[globalStyles.actionButton, styles.imageButton]}
            onPress={pickImage}
          >
            <Text style={globalStyles.actionButtonText}>
              Choose from Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.actionButton, styles.imageButton]}
            onPress={openCamera}
          >
            <Text style={globalStyles.actionButtonText}>Open Camera</Text>
          </TouchableOpacity>
        </View>

        {image && (
          <View style={styles.imagePreviewContainer}>
            <Text style={styles.label}>Image Preview:</Text>
            <Image source={{ uri: image }} style={styles.imagePreview} />
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={styles.removeImageButton}
            >
              <Text style={styles.removeImageText}>Remove Image</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={[globalStyles.actionButton, styles.submitButton]}
          onPress={handleSubmit}
        >
          <Text style={globalStyles.actionButtonText}>Submit Alarm</Text>
        </TouchableOpacity>

        {/* Confirmation Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={confirmModalVisible}
          onRequestClose={() => {
            setConfirmModalVisible(!confirmModalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirm Submission</Text> {/* Changed to local style */}
              <Text style={styles.modalText}> {/* Changed to local style */}
                Are you sure you want to declare this alarm?
              </Text>
              <View style={styles.modalButtonsRow}>
                <TouchableOpacity
                  style={[
                    globalStyles.modalButton,
                    globalStyles.cancelButton,
                    styles.modalButton,
                  ]}
                  onPress={() => setConfirmModalVisible(false)}
                >
                  <Text style={globalStyles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    globalStyles.modalButton,
                    globalStyles.confirmButton,
                    styles.modalButton,
                  ]}
                  onPress={handleConfirmSubmission}
                >
                  <Text style={globalStyles.confirmButtonText}>
                    Confirm & Send
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Success Modal - New */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={successModalVisible}
          onRequestClose={closeSuccessModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.successIcon}>✅</Text>
              <Text style={styles.modalTitle}>Alarm Declared</Text>
              <Text style={styles.modalText}>
                Thank you, Authorities have been notified.
              </Text>
              <View style={styles.modalSingleButton}>
                <TouchableOpacity
                  style={[
                    globalStyles.modalButton,
                    globalStyles.confirmButton,
                    styles.okSuccessButton,
                  ]} // Use a specific style if needed or combine
                  onPress={closeSuccessModal}
                >
                  <Text style={globalStyles.confirmButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 30, // Ensure scroll content isn't hidden by nav bar or similar
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    marginBottom: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: "#333",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginTop: 20,
    marginBottom: 8,
  },
  imageButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  imageButton: {
    width: "48%", // Adjust as needed
    paddingVertical: 12,
  },
  imagePreviewContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  imagePreview: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  removeImageButton: {
    padding: 8,
  },
  removeImageText: {
    color: "#FF5500",
    fontSize: 14,
  },
  submitButton: {
    marginTop: 30,
    paddingVertical: 15,
    alignSelf: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    width: "85%",
    maxWidth: 350,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 22, // Adjusted size
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  modalButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  modalButton: {
    width: "48%",
    alignItems: "center",
    paddingVertical: 12, // Ensure consistent padding
    borderRadius: 8, // Ensure consistent border radius
  },
  successIcon: {
    fontSize: 50, // Adjusted size
    color: "#4CAF50", // Green color for success
    marginBottom: 15,
  },
  modalSingleButton: {
    width: "100%", // Button takes full width of modal content area
    marginTop: 10, // Spacing above the button
    alignItems: "center", // Center the button itself if its style has a fixed width less than 100%
  },
  okSuccessButton: {
    width: "60%", // Example width, adjust as needed
    paddingVertical: 12,
    // It will use globalStyles.confirmButton for background and text color
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 14, // Increased padding for better touch area
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0", // Lighter, more subtle border
    borderRadius: 8,
    color: "#333333", // Standard dark text color
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#FFFFFF", // Clean white background
    marginBottom: 20,
    // Optional: add a subtle shadow for iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 1,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12, // Adjusted for Android consistency
    borderWidth: 1,
    borderColor: "#E0E0E0", // Lighter, more subtle border
    borderRadius: 8,
    color: "#333333", // Standard dark text color
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#FFFFFF", // Clean white background
    marginBottom: 20,
    // Optional: add elevation for Android shadow
    // elevation: 1,
  },
  placeholder: {
    color: "#A0A0A0", // Softer placeholder color
    fontSize: 16,
  },
  iconContainer: {
    top: Platform.OS === "ios" ? 16 : 18, // Adjusted for new padding
    right: 12,
  },
});
