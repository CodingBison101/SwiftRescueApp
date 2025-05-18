import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  const { id,title,description } = useLocalSearchParams();

  return (
   <View style={styles.container}>
      <Text style={styles.label}>Description: {description}</Text>
      <Text style={styles.label}>ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  notFound: {
    fontSize: 18,
    color: 'red',
  },
});