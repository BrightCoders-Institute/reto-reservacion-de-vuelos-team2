import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from 'react-native';
import {styles} from '../../styles/AppStyles';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import firestore from '@react-native-firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');

export const FromFlightScreen1 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const [inputText, setInputText] = useState('');
  const [airportsData, setAirportsData] = useState([]);
  const [matchedOptions, setMatchedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    const collectionRef = firestore().collection('airports');
    collectionRef
      .get()
      .then(querySnapshot => {
        const arrayAirports = [];
        querySnapshot.forEach(doc => {
          const airport = {...doc._data, id: doc.id};
          arrayAirports.push(airport);
        });
        // console.log(arrayAirports);
        setAirportsData(arrayAirports);
      })
      .catch(error => {
        console.log('Error al obtener los documentos:', error);
      });
  };

  const handleInput = text => {
    setInputText(text);
    setSelectedOption(null);
    if (text.trim() !== '') {
      const filteredOptions = airportsData.filter(
        item =>
          item.city.toLowerCase().includes(text.toLowerCase()) ||
          item.country.toLowerCase().includes(text.toLowerCase()),
      );
      setMatchedOptions(filteredOptions);
    } else {
      setMatchedOptions([]);
      setIsDesabledSignupBtn(true);
    }
  };

  const handleItemPress = item => {
    setInputText(`${item.city}, ${item.country}`);
    setSelectedOption(item);
    setMatchedOptions([]);
    setIsDesabledSignupBtn(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: height * 0.13}} />
      <View style={{height: height * 0.12, justifyContent: 'center'}}>
        <TitleFlightComponent title="Where are you now?" />
      </View>

      <View style={(styles.textInputContainer, {height: height * 0.55})}>
        <TextFieldFlight
          inputPlaceholder="Select location"
          inputValue={inputText}
          onChangeTextFn={handleInput}
        />
        <FlatList
          data={matchedOptions}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.airportFlatListElement}
              onPress={() => handleItemPress(item)}>
              <Text
                style={{padding: 10}}
                key={item.id}>{`${item.city}, ${item.country}`}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          style={{maxHeight: height * 0.25}}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>

      <View style={{height: height * 0.18}}>
        <ButtonFlightComponent
          onPressFn={() => navigation.navigate('ToScreen')}
          isDisabled={isDesabledSignupBtn}>
          <Text style={styles.buttonText}>Next</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
