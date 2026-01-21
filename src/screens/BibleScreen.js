import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BibleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bible</Text>
      <Text>Built-in Bible reader placeholder. Implement books/chapters and bookmarking next.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
});
