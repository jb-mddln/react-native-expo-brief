import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Button from './Button';
import TextBubble from './TextBubble';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#42a5f5' }}>
        <Header title='Accueil' />
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={{ width: '100%', height: 350 }}>
          <Image
            style={{
              width: '100%',
              height: '100%'
            }}
            source={require('../assets/homescreen.png')}
          />
        </View>
        <TextBubble
          text={`Bienvenue sur l\'application de SimplonVille.${'\n'}${'\n'}Cette application est toujours en développement, mais elle vous permettra de signaler des problèmes à nos différents agents des différents services de la ville.${'\n'}${'\n'}Pour commencer à utiliser l'application, cliquez sur le bouton ci-dessous qui vous redirigera vers notre formulaire de signalement.`}
        />
        <Button
          props={{
            title: 'J\'Alerte ma Ville',
            icon: 'bell-o',
            onPress: () => {
              navigation.navigate('report');
            }
          }}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20%',
    backgroundColor: '#ffffff',
  },
});
