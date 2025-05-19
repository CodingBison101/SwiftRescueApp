import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const statusBarHeight =
  Platform.OS === "android"
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

// Sample data for videos - replace with your actual data source
const VICTIMS_DATA = [
  { id: "1", name: "Djenouhat Manal", state: "safe" },
  { id: "2", name: "Hammani Islam", state: "evacuated" },
  { id: "3", name: "Abdelouahab Meriem", state: "stuck" },
  { id: "4", name: "Berghoum Mounib", state: "indanger" },
  { id: "5", name: "Benkhaled Yassine", state: "safe" },
    { id: "6", name: "Benkhaled Yassine", state: "safe" },
    { id: "7", name: "Benkhaled Yassine", state: "safe" },
    { id: "8", name: "Benkhaled Yassine", state: "safe" },
    { id: "9", name: "Benkhaled Yassine", state: "safe" },
    { id: "10", name: "Benkhaled Yassine", state: "safe" },
  // Add more videos
];

type VideoItemProps = {
  name: string;
  state: string;
  onPress: () => void;
};

const VideoItem = ({ name, state, onPress }: VideoItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.videoItem}>
    <Text style={styles.videoTitle}>{name}</Text>
    <Text style={styles.videoDescription}>{state}</Text>
  </TouchableOpacity>
);

export default function FirstAidVideosScreen() {
  const router = useRouter();

  // Use a more specific type for the item, derived from your data
  type VictimsList = (typeof VICTIMS_DATA)[0];

  const renderItem = ({ item }: { item: VictimsList }) => (
    <VideoItem
      name={item.name}
      state={item.state}
      onPress={() => {
        router.push({
          pathname: "/victim/[id]",
          params: { id: item.id, name: item.name, state: item.state },
        });
      }}
    />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        <FlatList
          data={VICTIMS_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.name}>First-Aid Videos</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10, // Use paddingHorizontal for list content
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  videoItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16, // Add horizontal margin for items
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  videoDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
