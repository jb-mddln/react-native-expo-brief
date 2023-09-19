import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from './components/Button';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>SimplonVille - Alerte</Text>
    </View>
  );
};

const Form = () => {
  const insets = useSafeAreaInsets();
  const buttonProps = {
    title: 'J\'Alerte ma Ville',
    icon: 'bell-o',
    onPress: () => {
      console.log('click')
    }
  };
  return (
    <View style={[ styles.container, { paddingTop: insets.top } ]}>
      <View style={styles.bottom}>
        <Button props={buttonProps} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <Form />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  header: {
    backgroundColor: '#42a5f5',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
