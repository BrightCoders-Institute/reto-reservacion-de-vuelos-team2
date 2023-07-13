import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../../styles/AppStyles';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {useForm} from '../../hooks/useForm';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import firestore from '@react-native-firebase/firestore';

export const FromFlightScreen1 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const {fromField, onResetForm, onInputChange} = useForm({
    fromField,
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const handleSearch = async (text) => {
    onInputChange(text);

    // Realiza la búsqueda en Firebase
    const snapshot = await firebase
      .database()
      .ref('registros')
      .orderByChild('campoDeBusqueda')
      .startAt(text)
      .endAt(text + '\uf8ff')
      .once('value');

    // Obtén los resultados de búsqueda
    const data = snapshot.val();
    const results = data ? Object.values(data) : [];

    setSearchResults(results);
  };

  const getCities = async () => {
    const arrayAirports = [];
    const originPlaces = await firestore().collection('airports').get();
    const airports = originPlaces.docs;
    for (const i of airports) {
      // console.log(i._data);
      arrayAirports.push(i._data);
    }
    console.log(arrayAirports);
    setSearchResults(arrayAirports);
  };

  const handleInput = async (text) => {
    console.log(text);
  };

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: 80}} />
      <TitleFlightComponent
        title="Where are you now?"
        paddingTop={115}
        marginTop={40}
      />

      <View style={{display: 'flex', flexDirection: 'column'}}>
        <TextFieldFlight
          inputPlaceholder="Select location"
          inputValue={fromField}
          onChangeTextFn={handleInput}
        />
        {/* <FlatList
          data={searchResults}
          renderItem={({item}) => <Text>{item.country}</Text>}
          style={{backgroundColor: 'red'}}
          keyExtractor={(item) => item.id}
        /> */}
      </View>

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('ToScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
