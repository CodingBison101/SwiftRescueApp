import { useAudioPlayer } from "expo-audio";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { styles } from "../../../assets/styles/styles.js";

export default function CallForHelpPage() {
  const router = useRouter();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [otherCaseText, setOtherCaseText] = useState<string>(""); // State for "Other" text input
  const [confirmType, setConfirmType] = useState<"self" | "others" | null>(
    null
  );
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const caseOptions = ["Stuck", "In Danger", "Other"];
  const audioSource = [
    require("../../../assets/sounds/siren.mp3"),
    require("../../../assets/sounds/siren-imed1.mp3"),
    require("../../../assets/sounds/siren-imed2.mp3"),
    require("../../../assets/sounds/siren-imed3.mp3"),
  ];

  const player = useAudioPlayer(audioSource[Math.round(Math.random() * 3)]);
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const playAudio = () => {
    console.log(Math.round(Math.random() * 3));
    if (Math.random() < 0.25) playAudiofr();
  };
  const playAudiofr = async () => {
    player.play();
    await delay(3000);
  };
  const handleCaseSelection = (caseType: string) => {
    setSelectedCase(caseType);
    if (caseType === "Other") {
      Animated.parallel([
        Animated.timing(animatedHeight, {
          toValue: 55,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animatedHeight, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(animatedOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start(() => setOtherCaseText(""));
    }
  };

  const handleSelfAlert = () => {
    if (!selectedCase) {
      alert("Please select your case first");
      return;
    }
    if (selectedCase === "Other" && !otherCaseText.trim()) {
      alert("Please provide details for 'Other'");
      return;
    }
    setConfirmType("self");
    setConfirmModalVisible(true);
  };

  const handleAlertForOthers = () => {
    // Instead of checking for selectedCase, check for capturedImage
    if (!selectedCase) {
      alert("Please select your case first");
      return;
    }
    if (selectedCase === "Other" && !otherCaseText.trim()) {
      alert("Please provide details for 'Other'");
      return;
    }
    if (!capturedImage) {
      alert("Please provide a photo before alerting for others.");
      return;
    }
    setConfirmType("others");
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

  // Camera logic from declare_alarm.tsx
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
      setCapturedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={styles.backButton}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
              }}
            >
              ‹ Back
            </Text>
          </TouchableOpacity>

          <View style={{ width: 40 }} />
        </View>
        <View style={localstyles.caseSection}>
          <Text style={localstyles.caseTitle}>What is your case:</Text>

          {caseOptions.map((caseType, index) => (
            <View key={index}>
              <TouchableOpacity
                style={[
                  localstyles.caseOption,
                  selectedCase === caseType && localstyles.selectedCaseOption,
                ]}
                onPress={() => handleCaseSelection(caseType)}
              >
                <Text style={localstyles.caseOptionText}>{caseType}</Text>
              </TouchableOpacity>
              {caseType === "Other" && (
                <Animated.View
                  style={{
                    overflow: "hidden",
                    height: animatedHeight,
                    opacity: animatedOpacity,
                  }}
                >
                  <TextInput
                    style={{
                      backgroundColor: "#f8f8f8",
                      borderRadius: 8,
                      padding: 10,
                      marginTop: 10,
                      borderWidth: 1,
                      borderColor: "#ddd",
                      fontSize: 16,
                    }}
                    placeholder="Please specify your case..."
                    value={otherCaseText}
                    onChangeText={setOtherCaseText}
                  />
                </Animated.View>
              )}
            </View>
          ))}
          <View style={localstyles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleSelfAlert}
            >
              <View
                style={{
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                  }}
                >
                  👤
                </Text>
              </View>
              <Text style={styles.actionButtonText}>Self-alert</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={openCamera}
            >
              <View
                style={{
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 24 }}>👥</Text>
              </View>
              <Text style={styles.actionButtonText}>Alert for others</Text>
            </TouchableOpacity>
          </View>

          <GestureHandlerRootView>
            <TouchableWithoutFeedback
              style={localstyles.alarmIconContainer}
              onPress={() => playAudio()}
            >
              <Text style={localstyles.alarmIcon}>🚨</Text>
            </TouchableWithoutFeedback>
            {/* Show Open Camera button always for others */}
            <TouchableOpacity
              style={{
                marginTop: 20,
                alignSelf: "center",
                backgroundColor: "#FF5500",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 8,
              }}
              onPress={openCamera}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Open Camera
              </Text>
            </TouchableOpacity>
            {/* Optional: Show image preview if captured */}
            {capturedImage && (
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={{ marginBottom: 5 }}>Image Preview:</Text>
                <Image
                  source={{ uri: capturedImage }}
                  style={{
                    width: 200,
                    height: 150,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#ddd",
                  }}
                />
                <TouchableOpacity onPress={() => setCapturedImage(null)}>
                  <Text style={{ color: "#FF5500", marginTop: 5 }}>
                    Remove Image
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {/* Show Confirm button below Alert for others if photo is provided */}
            {capturedImage && (
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  alignSelf: "center",
                  backgroundColor: "#FF5500",
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  borderRadius: 8,
                }}
                onPress={handleAlertForOthers}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  Confirm Alert for Others
                </Text>
              </TouchableOpacity>
            )}
          </GestureHandlerRootView>
        </View>
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
                {confirmType === "self"
                  ? "Are you sure you want to alert authorities about your situation?"
                  : "Are you sure you want to alert authorities on behalf of someone else?"}
              </Text>

              <View style={localstyles.modalButtons}>
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
              <Text style={localstyles.successIcon}>✅</Text>
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
const localstyles = StyleSheet.create({
  caseSection: {
    flex: 1,
    padding: 20,
  },
  caseTitle: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 20,
  },
  caseOption: {
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCaseOption: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  caseOptionText: {
    fontSize: 18,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  alarmIconContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  alarmIcon: {
    fontSize: 60,
  },
  successIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
});
/*
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25, // This creates the cylinder shape
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
  },

  arrowIcon: {
    fontSize: 16,
    color: "#888",
  },
  
  actionButton: {
    backgroundColor: "#FF5500",
    borderRadius: 10,
    padding: 15,
    width: "45%",
    alignItems: "center",
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
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  alarmIconContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  alarmIcon: {
    fontSize: 60,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  confirmButton: {
    justifyContent: "center",
    backgroundColor: "#FF5500",
  },width: "45%",
  confirmButtonText: {r",
    color: "white",
    fontSize: 16,
  },backgroundColor: "#ccc",
  modalSingleButton: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  ,onfirmButton: {
}); justifyContent: "center",
  confirmButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalSingleButton: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  ,
});
*/
