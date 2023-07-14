import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {PassengersFlightPicker} from '../../components/BookAFlight/PassengersFlightPicker';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';

const {width, height} = Dimensions.get('window');

export const PassengersFlightScreen4 = ({navigation, route}) => {
  const {dateData: {fromInputText, optionSelectedFrom, toInputText, optionSelectedTo, inputDate}} = route.params;
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const [optionSelected, setOptionSelected] = useState('1');

  const handleChangePicker = (val) => {
    setOptionSelected(val);
    console.log('passengers:', val);
  };

  const goToNextPage = () => {
    const passengersData = {
      fromInputText,
      optionSelectedFrom,
      toInputText,
      optionSelectedTo,
      inputDate,
      numOfPassengers: optionSelected,
    };
    navigation.navigate('ResultsScreen', {passengersData});
  };

  return (
    <View style={styles.fromFlightContainer}>

      <View style={{height: height * 0.13}}>
        <View style={[styles.topContainer, styles.underlineContainer]}>
          <View style={styles.ToFromContainer}>
            <FromContent
              abbr={optionSelectedFrom.abbr}
              country={optionSelectedFrom.country}
            />
          </View>

          <Icon name="airplane" size={25} color="#899FFF" />

          <View style={styles.ToFromContainer}>
            <ToContent
              abbr={optionSelectedTo.abbr}
              country={optionSelectedTo.country}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.infoText}>{inputDate}</Text>
        </View>
      </View>

      <View style={{height: height * 0.2, justifyContent: 'center'}}>
        <TitleFlightComponent title="How many passengers?" />
      </View>

      <View style={(styles.textInputContainer, {height: height * 0.47})}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 100,
          }}>
          <PassengersFlightPicker onChangeOptionFn={handleChangePicker} />
        </View>
      </View>

      <View style={{height: height * 0.18}}>
        <ButtonFlightComponent
          onPressFn={goToNextPage}
          isDisabled={false}>
          <Text style={styles.buttonText}>Next</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
