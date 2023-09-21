import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ props }) {
  const { title = '', icon = '', onPress } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon && (
        <FontAwesome name={icon} size={18} color="white" style={styles.icon} />
      )}
      <Text style={[styles.text, { textTransform: 'uppercase' }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  text: {
    color: 'white',
    fontSize: 14
  },
  icon: {
    paddingRight: 8
  }
});