/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {collection, getDocs} from 'firebase/firestore';
import {database} from './src/db/firebase';
import { SignUpScreen } from './src/screens/SignUpScreen';

async function fethData() {
  const querySnapshot = await getDocs(collection(database, 'users'));
  querySnapshot.forEach(doc => {
    const {first_name, email, password} = doc.data();
    console.log(`${doc.id} => ${first_name}, ${email}, ${password}`);
  });
}

function App(): JSX.Element {
  useEffect(() => {
    fethData();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
