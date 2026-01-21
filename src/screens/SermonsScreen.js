import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SermonsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sermons</Text>
      <Text>Audio & video sermons will appear here. Add search and archive features next.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
});
