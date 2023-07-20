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

const {width, height} = Dimensions.get('window');

export const FromFlightScreen1 = ({navigation, route}) => {
  const {
    homePageData: {userEmail},
  } = route.params;
  const [isDesabledNextBtn, setIsDesabledNextBtn] = useState(true);
  const [fromInputText, setFromInputText] = useState('');
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
        setAirportsData(arrayAirports);
      })
      .catch(error => {
        console.log('Error al obtener los airports:', error);
      });
  };

  const handleInput = text => {
    setFromInputText(text);
    setSelectedOption(null);
    if (text.trim() !== '') {
      const filteredOptions = airportsData.filter(
        item =>
          item.city.toLowerCase().startsWith(text.toLowerCase()) ||
          item.country.toLowerCase().startsWith(text.toLowerCase()),
      );
      setMatchedOptions(filteredOptions);
    } else {
      setMatchedOptions([]);
      setIsDesabledNextBtn(true);
    }
  };

  const handleItemPress = item => {
    setFromInputText(`${item.city}, ${item.country}`);
    setSelectedOption(item);
    setMatchedOptions([]);
    setIsDesabledNextBtn(false);
    Keyboard.dismiss();
  };

  const goToNextPage = () => {
    const fromData = {
      userEmail,
      fromInputText,
      optionSelectedFrom: selectedOption,
      airportsData,
    };
    navigation.navigate('ToScreen', {fromData});
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
          inputValue={fromInputText}
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
          onPressFn={goToNextPage}
          isDisabled={isDesabledNextBtn}>
          <Text style={styles.buttonText}>Next</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
