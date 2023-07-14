import React from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';

const {width, height} = Dimensions.get('window');

export const ResultsFlightScreen5 = ({navigation, route}) => {
  const {passengersData: {fromInputText, optionSelectedFrom, toInputText, optionSelectedTo, inputDate, numOfPassengers}} = route.params;

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: height * 0.18}} />

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
          <Text style={[styles.infoText, styles.textRight]}>{`${numOfPassengers} passengers`}</Text>
        </View>
      </View>

      <View style={{height: height * 0.15, justifyContent: 'center'}}>
        <TitleFlightComponent
          title="Your request      was received."
          // paddingTop={230}
          marginTop={25}
        />
      </View>
      <View style={{height: height * 0.34}} />

      <View style={{height: height * 0.18}}>
        <ButtonFlightComponent
          onPressFn={() => navigation.navigate('HomePageScreen')}
          isDisabled={false}>
          <Text style={styles.buttonText}>Finish</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
