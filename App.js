import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Button from './components/Button';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>SimplonVille - Alerte</Text>
    </View>
  );
};

const Form = () => {
  const buttonProps = {
    title: 'J\'Alerte ma Ville',
    icon: 'bell-o',
    onPress: () => {
      console.log('click')
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Button props={buttonProps} />
      </View>
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

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: '#42a5f5' }} >
          <Header />
      </SafeAreaView>
      <View style={{ width: '100%', height: 250 }}>
        <Image
          style={{ width: '100%', height: '100%', objectPosition: 'center top' }}
          source={require("./assets/placeholder.jpg")}
        />
      </View>
      <Text style={styles.p}>
        Ceci est un formulaire de signalement vous permettant d'alerter directement les services municipaux lorsque vous rencontrez un dysfonctionnement dans votre ville.(Ex. : propreté, voirie, éclairage public...)
      </Text>
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
  },
  p: {
    textAlign: 'justify',
    padding: 10
  }
});
