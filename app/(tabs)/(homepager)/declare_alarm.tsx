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
import { styles as globalStyles } from "../../../assets/styles/styles.js";

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
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const pickImage = async () => {
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
      alert("Missing Information"); 
      return;
    }
    setConfirmModalVisible(true);
  };

  const handleConfirmSubmission = () => {
    console.log("Submitting:", {
      alarmType: selectedAlarmType,
      imageUri: image,
    });
    setConfirmModalVisible(false);
    setSuccessModalVisible(true);

    setSelectedAlarmType(null);
    setImage(null);
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Declare Alarm</Text>
          <View style={{ width: 40 }} />
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
              <Text style={styles.modalTitle}>Confirm Submission</Text>
              <Text style={styles.modalText}>
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
                  ]}
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
    paddingBottom: 30,
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
    fontWeight : "bold",
    fontSize: 38,
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
    width: "48%",
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
    fontSize: 22,
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
    paddingVertical: 12,
    borderRadius: 8,
  },
  successIcon: {
    fontSize: 50,
    color: "#4CAF50",
    marginBottom: 15,
  },
  modalSingleButton: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },
  okSuccessButton: {
    width: "60%",
    paddingVertical: 12,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    color: "#333333",
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    color: "#333333",
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  placeholder: {
    color: "#A0A0A0",
    fontSize: 16,
  },
  iconContainer: {
    top: Platform.OS === "ios" ? 16 : 18,
    right: 12,
  },
});
