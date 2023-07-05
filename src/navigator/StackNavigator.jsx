import { createStackNavigator } from '@react-navigation/stack';
import { LogInScreen } from "../screens/LogInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { HomePageScreen } from '../screens/HomePageScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignUpScreen" component={ SignUpScreen } />
      <Stack.Screen name="LogInScreen" component={ LogInScreen } />
      <Stack.Screen name="HomePageScreen" component={ HomePageScreen } />
    </Stack.Navigator>
  );
}