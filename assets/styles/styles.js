import { Dimensions, Platform, StyleSheet } from "react-native";

// Constants
const { height: windowHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginTop: Platform.OS === "ios" ? 8 : 10,
    paddingTop: 15,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: Platform.OS === "android" ? 0 : 8,
  },
  appTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  actionButton: {
    backgroundColor: "#FF5500",
    borderRadius: 10,
    padding: 15,
    width: "45%",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 10,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
    marginRight: 10,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  optionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    paddingRight: 40,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF8866",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  shieldIconImage: {
    width: 120,
    height: 120,
  },
  arrowIcon: {
    fontSize: 16,
    color: "#888",
  },
  statusBanner: {
    backgroundColor: "#FF5757",
    padding: 10,
    marginTop: Platform.OS === "android" ? 0 : 10,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  routeIndicator: {
    position: "absolute",
    width: 4,
    height: windowHeight * 0.4,
    backgroundColor: "#FF5757",
    top: "25%",
    right: "45%",
  },
  mapPlaceholderText: {
    fontSize: 24,
    color: "#888",
    marginBottom: 10,
  },
  mapPlaceholderSubtext: {
    fontSize: 16,
    color: "#AAA",
  },
  topSection: {
    backgroundColor: "#FF5500",
    height: "35%",
    justifyContent: "center",
    paddingLeft: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  formSection: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  inputIcon: {
    fontSize: 20,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#FF8866",
  },
  checkmark: {
    color: "white",
    fontSize: 14,
  },
  rememberText: {
    fontSize: 14,
  },
  forgotText: {
    color: "#FF8866",
    fontSize: 14,
  },
  buttonGrid: {
    height: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    marginTop: 10,
  },
  row: {
    width: "100%",
    height: "45%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0,
  },
  gridButton: {
    backgroundColor: "#FF5500",
    width: "48%",
    height: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginVertical: "1%",
    borderRadius: 15, // Added this line for rounded corners
  },
  centerButtonContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 180,
    height: 180,
    marginLeft: -90,
    marginTop: -90,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  centerButton: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#e71b1b",
    borderWidth: 10,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    boxshadowColor: "#000",
    boxshadowOffset: { width: 0, height: 3 },
    boxshadowOpacity: 0.4,
    boxshadowRadius: 5,
  },
  gridButtonText: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  centerButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  appTitle: {
    width: 160,
    height: 40,
  },
  appIcon: {
    marginRight: 8,
    width: 45,
    height: 50,
  },
  loginIcon: {
    marginRight: -6,
    paddingLeft: 6,
  },
  modalSingleButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#e71b1b",
  },
  confirmButtonText: {
    color: "white",
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
  },
  cancelButtonText: {
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxWidth: 300,
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#FF5500",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF5500",
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    overflow: "hidden",
  },
  optionIconImage: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  optionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const colors = {
  primary: "#FF5500",
  secondary: "#FF5757",
  background: "#fff",
};
