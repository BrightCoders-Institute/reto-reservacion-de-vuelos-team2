/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {collection, getDocs} from 'firebase/firestore';
import {database} from './src/db/firebase';

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
    <SafeAreaView>
      <Text>Hola mundo</Text>
    </SafeAreaView>
  );
}

export default App;
