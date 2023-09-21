import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>SimplonVille - {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#42a5f5',
    padding: 10
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});