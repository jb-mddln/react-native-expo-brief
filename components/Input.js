import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder = '', required = false, width = '100%', height = 50, editable = true, multiline = false, numberOfLines = 0, onChangeText }) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const borderStyle =
    required && isFocused && text === ''
      ? { borderColor: 'red', outline: '1px solid rgb(255, 0, 0)' }
      : {};

  return (
    <TextInput
      placeholder={required ? `${placeholder} *` : placeholder}
      style={[styles.input, borderStyle, { width: width }, { height: height }]}
      onChangeText={value => {
        setText(value);
        onChangeText && onChangeText(value);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      editable={editable}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#444',
    textAlign: 'left',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#42a5f5',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});