import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import ReportForm from './components/ReportForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen
          name='home'
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="report" component={ReportForm} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}