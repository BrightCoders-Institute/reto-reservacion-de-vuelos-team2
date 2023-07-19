import React, {useEffect, useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export const ToFlightScreen2 = ({navigation, route}) => {
  const {
    fromData: {userEmail, fromInputText, optionSelectedFrom, airportsData},
  } = route.params;
  const [isDesabledNextBtn, setIsDesabledNextBtn] = useState(true);
  const [toInputText, setToInputText] = useState('');
  const [newAirportsData, setNewAirportsData] = useState([]);
  const [matchedOptions, setMatchedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    getToOptions();
  }, []);

  const getToOptions = () => {
    const selectedOption = optionSelectedFrom;
    const newOptions = airportsData.filter(
      item => item.city !== selectedOption.city,
    );
    setNewAirportsData(newOptions);
  };

  const handleInput = text => {
    setToInputText(text);
    setSelectedOption(null);
    if (text.trim() !== '') {
      const filteredOptions = newAirportsData.filter(
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
    setToInputText(`${item.city}, ${item.country}`);
    setSelectedOption(item);
    setMatchedOptions([]);
    setIsDesabledNextBtn(false);
    Keyboard.dismiss();
  };

  const goToNextPage = () => {
    const toData = {
      userEmail,
      fromInputText,
      optionSelectedFrom,
      toInputText,
      optionSelectedTo: selectedOption,
    };
    navigation.navigate('DateScreen', {toData});
  };

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: height * 0.13}}>
        <View style={styles.topContainer}>
          <View style={[styles.ToFromContainer, styles.underlineContainer]}>
            <FromContent
              abbr={optionSelectedFrom.abbr}
              country={optionSelectedFrom.country}
            />
          </View>

          <Icon name="airplane" size={25} color="#899FFF" />

          <View style={styles.ToFromContainer} />
        </View>
      </View>

      <View style={{height: height * 0.12, justifyContent: 'center'}}>
        <TitleFlightComponent title="Where will you be flying to?" />
      </View>

      <View style={(styles.textInputContainer, {height: height * 0.55})}>
        <TextFieldFlight
          inputPlaceholder="Select location"
          inputValue={toInputText}
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
