import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown'
import Button from './components/Button';


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>SimplonVille - Alerte</Text>
    </View>
  );
};

const Form = () => {
  const alertTypes = ['Voirie', 'Stationnement', 'Travaux', 'Divers']

  const buttonProps = {
    title: 'J\'Alerte ma Ville',
    icon: 'bell-o',
    onPress: () => {
      console.log('click')
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.p, {}]}>Merci de sélectionner le type d'alerte dans la liste : </Text>
      <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
        <SelectDropdown
          data={alertTypes}
          defaultValueByIndex={0}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </ScrollView>
      <View style={styles.bottom}>
        <Button props={buttonProps} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#42a5f5' }} >
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
  },

  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },
  dropdown1BtnStyle: {
    width: 250,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
