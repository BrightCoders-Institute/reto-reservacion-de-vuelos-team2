/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {CardComponent} from '../components/Flights/CardComponent';
import {FloatButtonComponent} from '../components/Flights/FloatButtonComponent';

export const HomePageScreen = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }

  const logOff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const handleLogOut = () => {
    logOff();
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My flights</Text>
      {/* Change for a flatlist */}
      <View style={styles.cardsContainer}>
        <CardComponent />
        <CardComponent />
      </View>
      <FloatButtonComponent navigation={navigation} />
      <Button title='SignOff' onPress={ handleLogOut } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    color: '#899FFF',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 15,
  },
  cardsContainer: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
});
