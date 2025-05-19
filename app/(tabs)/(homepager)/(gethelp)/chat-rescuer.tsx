import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ChatRescuerScreen() {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");

  // Sample messages data - scenario of person stuck in hall with heavy smoke due to fire
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "What is your emergency situation?",
      timestamp: "10:15 PM",
      isReceived: true,
    },
    {
      id: "2",
      text: "I'm trapped in a hallway with heavy smoke. There's a fire in the building.",
      timestamp: "10:17 PM",
      isReceived: false,
    },
    {
      id: "3",
      text: "Stay calm. What floor are you on and what is your exact location in the building?",
      timestamp: "10:18 PM",
      isReceived: true,
    },
    {
      id: "4",
      text: "3rd floor, east hallway near room 312. The smoke is getting thicker and I can't see the exit.",
      timestamp: "10:20 PM",
      isReceived: false,
    },
    {
      id: "5",
      text: "Get low to the floor where air is clearer. If possible, cover your mouth with cloth. Is there a window nearby?",
      timestamp: "10:21 PM",
      isReceived: true,
    },
    {
      id: "6",
      text: "Yes, there's a window at the end of the hall but I'm not sure I can reach it safely.",
      timestamp: "10:22 PM",
      isReceived: false,
    },
    {
      id: "7",
      text: "Emergency services have been dispatched to your location. Stay low, crawl toward the window if it's safe. If not, find a room, close the door, and seal gaps with cloth to keep smoke out.",
      timestamp: "10:23 PM",
      isReceived: true,
    },
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

    const newMsg = {
      id: (messages.length + 1).toString(),
      text: newMessage,
      timestamp: timeString,
      isReceived: false,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  type Message = {
    id: string;
    text: string;
    timestamp: string;
    isReceived: boolean;
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageRow}>
      {item.isReceived && (
        <View style={styles.avatarContainer}>
          <View style={styles.rescuerAvatar}>
            <Text style={styles.avatarText}>R</Text>
          </View>
        </View>
      )}

      <View
        style={[
          styles.messageContainer,
          item.isReceived ? styles.receivedMessage : styles.sentMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.isReceived
              ? styles.receivedMessageText
              : styles.sentMessageText,
          ]}
        >
          {item.text}
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
   
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#FF5500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rescue Chat</Text>
        <View style={styles.headerRight} />
      </View>
      
      {/* Chat area */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.chatArea}
        contentContainerStyle={styles.messagesList}
      />

      {/* Quick action button */}
      <View style={styles.quickActionContainer}>
        <TouchableOpacity style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>
            Send Location to Emergency Services
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            placeholderTextColor="#999"
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Ionicons name="send" size={24} color="#FF5500" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  headerRight: {
    width: 32,
  },
  chatArea: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  messagesList: {
    padding: 15,
  },
  messageRow: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-end",
  },
  avatarContainer: {
    marginRight: 8,
  },
  rescuerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FF5500",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
  },
  messageContainer: {
    maxWidth: "75%",
    borderRadius: 16,
    padding: 12,
  },
  receivedMessage: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignSelf: "flex-start",
  },
  sentMessage: {
    backgroundColor: "#FF5500",
    alignSelf: "flex-end",
  },
  messageText: {
    fontSize: 16,
  },
  receivedMessageText: {
    color: "#1F2937",
  },
  sentMessageText: {
    color: "white",
  },
  timestamp: {
    fontSize: 11,
    color: "#6B7280",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  quickActionContainer: {
    padding: 8,
    alignItems: "center",
  },
  quickActionButton: {
    backgroundColor: "#FF5500",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  quickActionText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "white",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#F3F4F6",
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
