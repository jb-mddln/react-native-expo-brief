import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

export default function ReportForm() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#42a5f5' }}>
        <Header title='Formulaire de Signalement' />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}