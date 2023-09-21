import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import MapView, { Marker } from 'react-native-maps';
import Button from './Button';
import Input from './Input';
import { useState } from 'react';
import Header from './Header';
import TextBubble from './TextBubble';

const RenderMapView = ({ region, setMapRegion }) => {
  // Android need google map api ? and web is not supported
  return (Platform.OS === 'ios') && (
    <MapView
      style={{ width: 380, height: 280 }}
      region={region}
    >
      <Marker
        draggable
        coordinate={region}
        title='Emplacement à signaler'
        onDragEnd={(e) => {
          console.log(`mapViewerOnDragEnd: ${e.nativeEvent.coordinate.latitude} ${e.nativeEvent.coordinate.longitude}`)
          setMapRegion(e.nativeEvent.coordinate)
        }}
      />
    </MapView>
  );
}

const Form = () => {
  const alertTypes = ['Voirie', 'Stationnement', 'Travaux', 'Divers'];
  const [lastName, setLastName] = useState('');
  const[mapViewerRegion, setMapViewerRegion] = useState({
    latitude: 50.633333,
    longitude: 3.066667,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  return (
    <View style={styles.container}>
      <TextBubble text={`Ceci est un formulaire de signalement vous permettant d\'alerter directement les services municipaux lorsque vous rencontrez un dysfonctionnement dans votre ville. (Ex. : propreté, voirie, éclairage public...)${'\n'}${'\n'}Les champs du formulaire marqués par un * sont obligatoires et doivent être correctement remplis.${'\n'}${'\n'}Merci de bien vouloir entrer vos informations :`} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Input placeholder='Entrez votre nom' required width={185} onChangeText={(value) => {
          console.log(`onChangeText: ${value}`);
          setLastName(value);
        }}
        />
        <View style={{ marginRight: 10 }} />
        <Input placeholder='Entrez votre prénom' required  width={185}/>
      </View>
      <View>
        <Input placeholder='Entrez votre email' required width={380} />
      </View>
      <TextBubble text={'Merci de sélectionner le type d\'alerte que vous souhaitez signaler dans la liste :'} />
      <SelectDropdown
        data={alertTypes}
        defaultValueByIndex={0}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#42a5f5'}
              size={18}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
      <View style={{ margin: 10 }}>
        <Input 
          placeholder='Décrivez brièvement le problème que vous souhaitez signaler.' 
          required 
          width={380} 
          height={180}
          multiline 
          numberOfLines={8} 
        />
        <RenderMapView region={mapViewerRegion} setMapRegion={setMapViewerRegion} />
      </View>
      <View style={styles.bottom}>
        <Button props={{ 
          title: 'J\'Alerte ma Ville', 
          icon: 'bell-o' ,
          onPress: () => { 
            console.log('click'); 
            console.log(lastName); 
          }
        }} />
      </View>
    </View>
  );
}

export default function ReportForm() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#42a5f5' }}>
        <Header title='Formulaire de Signalement' />
      </SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
          style={{ backgroundColor: '#fff'}}
        >
          <View style={{ width: '100%', height: 300 }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain'
              }}
              source={require('../assets/form.png')}
            />
          </View>
          <Form />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20%'
  },
  dropdown1BtnStyle: {
    width: 250,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#42a5f5'
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5'
  },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
});