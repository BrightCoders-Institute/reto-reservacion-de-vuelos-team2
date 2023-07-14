import React, {useState, useEffect} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {CalendarFlightComponent} from '../../components/BookAFlight/CalendarFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';

const {width, height} = Dimensions.get('window');

export const DateFlightScreen3 = ({navigation, route}) => {
  const {toData: {fromInputText, optionSelectedFrom, toInputText, optionSelectedTo}} = route.params;
  const [isDesabledNextBtn, setIsDesabledNextBtn] = useState(true);
  const [inputDate, setInputDate] = useState('');

  useEffect(() => {
    console.log('inputTo: ' + fromInputText);
    console.log('inputFrom: ' + toInputText);
    console.log('option selected From: ');
    console.log(optionSelectedFrom);
    console.log('option selected To: ');
    console.log(optionSelectedTo);
  }, []);

  const handleChangeDate = day => {
    const date = new Date(day.dateString);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    const dateText = date.toLocaleDateString('en-US', options);
    setInputDate(dateText);
    setIsDesabledNextBtn(false);
    console.log(dateText);
  };

  const goToNextPage = () => {
    const dateData = {
      fromInputText,
      optionSelectedFrom,
      toInputText,
      optionSelectedTo,
      inputDate,
    };
    navigation.navigate('PassengersScreen', {dateData});
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
      </View>

      <View style={{height: height * 0.12, justifyContent: 'center'}}>
        <TitleFlightComponent title="Select date" />
      </View>

      <View style={(styles.textInputContainer, {height: height * 0.55})}>
        <CalendarFlightComponent onChangeDateFn={handleChangeDate} />
      </View>

      <View style={{height: height * 0.18}}>
        <ButtonFlightComponent
          // onPressFn={() => navigation.navigate('PassengersScreen')}
          onPressFn={goToNextPage}
          isDisabled={isDesabledNextBtn}>
          <Text style={styles.buttonText}>Next</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
