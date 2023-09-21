import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextBubble({ text }) {
  return (<View style={styles.bubble}>
      <Text style={styles.p}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 bubble: {
  backgroundColor: '#42a5f5',
  maxWidth: '100%',
  paddingHorizontal: 15,
  paddingTop: 10,
  paddingBottom: 15,
  borderRadius: 20,
  margin: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3,
  elevation: 5,
},
p: {
    textAlign: 'justify', 
    paddingTop: 5,
    fontSize: 14,
    color: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
 }
});