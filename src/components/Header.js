import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 12, backgroundColor: '#0b5cff' },
  title: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
