import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AOG Church App</Text>
      <Button title="Sermons" onPress={() => navigation.navigate('Sermons')} />
      <Button title="Bible" onPress={() => navigation.navigate('Bible')} />
      <Button title="Hymns" onPress={() => navigation.navigate('Hymns')} />
      <Button title="Events" onPress={() => navigation.navigate('Events')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 20 },
});
