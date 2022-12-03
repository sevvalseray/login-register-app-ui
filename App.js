import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import ForgotPasswordScreen from './src/ForgotPasswordScreen';
import HomeScreen from './src/HomeScreen';
import VerificationScreen from './src/VerificationScreen';
import PasswordChangedScreen from './src/PasswordChangedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen options={{headerShown: false}} name="Verification" component={VerificationScreen} />
        <Stack.Screen options={{headerShown: false}} name="PasswordChanged" component={PasswordChangedScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
