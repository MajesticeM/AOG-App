import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HymnsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hymn Book</Text>
      <Text>Digital hymn collection with lyrics and search will go here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
});
