import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles as style } from '../../../assets/styles/styles.js';
const statusBarHeight =
  Platform.OS === 'android'
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

// Sample data for videos - replace with your actual data source
const FIRST_AID_VIDEOS_DATA = [
  { id: '1', title: 'Fire At Level 1', description: 'Fire in amphi 2.' },
  { id: '2', title: 'Gaz Leak at Level 2', description: 'Gaz Leak at TP 7.' },
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
      onPress={() => router.push('/checkplans')}
    />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={style.header}>
                      <TouchableOpacity
                        onPress={() => router.replace("/")}
                        style={style.backButton}
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
      <View style={styles.container}>
        <FlatList
          data={FIRST_AID_VIDEOS_DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.title}>Hazards List</Text>}
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