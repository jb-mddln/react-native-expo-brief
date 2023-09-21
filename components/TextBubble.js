import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextBubble({ text }) {
  return (<View style={[styles.bubble, { backgroundColor: '#42a5f5' }]}>
      <Text style={styles.p}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 bubble: {
  maxWidth: '100%',
  paddingHorizontal: 15,
  paddingTop: 10,
  paddingBottom: 15,
  borderRadius: 20,
  margin: 20
},
p: {
    textAlign: 'justify', 
    paddingTop: 5,
    fontSize: 14,
    color: 'white'
 }
});