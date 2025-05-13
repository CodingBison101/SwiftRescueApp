import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const statusBarHeight =
  Platform.OS === 'android'
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

// Sample data for videos - replace with your actual data source
const FIRST_AID_VIDEOS_DATA = [
  { id: '1', title: 'CPR Tutorial', description: 'Learn how to perform CPR.' },
  { id: '2', title: 'Choking: First Aid', description: 'What to do if someone is choking.' },
  { id: '3', title: 'Burn Treatment', description: 'First aid for minor burns.' },
  // Add more videos
];

type VideoItemProps = {
  title: string;
  description: string;
  onPress: () => void;
};

const VideoItem = ({ title, description, onPress }: VideoItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.videoItem}>
    <Text style={styles.videoTitle}>{title}</Text>
    <Text style={styles.videoDescription}>{description}</Text>
  </TouchableOpacity>
);

export default function FirstAidVideosScreen() {
  const router = useRouter();

  // Use a more specific type for the item, derived from your data
  type FirstAidVideo = typeof FIRST_AID_VIDEOS_DATA[0];

  const renderItem = ({ item }: { item: FirstAidVideo }) => (
    <VideoItem
      title={item.title}
      description={item.description}
      onPress={() => {
        router.push({
          pathname: `/resources/${item.id}`, // Navigate to your dynamic route in the 'resources' directory
          // Pass other item details as query parameters.
          // These will be accessible in 'app/resources/[id].tsx' via useLocalSearchParams().
          // The 'id' itself is part of the pathname and also accessible via useLocalSearchParams().
          params: { title: item.title, description: item.description },
        });
      }}
    />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        <FlatList
          data={FIRST_AID_VIDEOS_DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.title}>First-Aid Videos</Text>}
        />
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 10, // Use paddingHorizontal for list content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  videoItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16, // Add horizontal margin for items
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  videoDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});