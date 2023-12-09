import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './pages/home';
import { Money } from './pages/money';
import { Lenght } from './pages/lenght';
import { Weight } from './pages/weight';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Money" component={Money}></Stack.Screen>
        <Stack.Screen name="Lenght" component={Lenght}></Stack.Screen>
        <Stack.Screen name="Weight" component={Weight}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}