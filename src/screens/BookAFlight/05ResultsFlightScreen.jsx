import React, {useEffect, useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';
import firestore from '@react-native-firebase/firestore';
import {Loader} from '../../components/Loader';

const {width, height} = Dimensions.get('window');

export const ResultsFlightScreen5 = ({navigation, route}) => {
  const {
    passengersData: {
      userEmail,
      fromInputText,
      optionSelectedFrom,
      toInputText,
      optionSelectedTo,
      inputDate,
      numOfPassengers,
    },
  } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDisplayed, setIsLoadingDisplayed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const saveFlight = () => {
    const flightsCollection = firestore().collection('flights');
    const flightData = {
      userEmail,
      fromCity: optionSelectedFrom.city,
      fromCountry: optionSelectedFrom.country,
      fromAbbr: optionSelectedFrom.abbr,
      toCity: optionSelectedTo.city,
      toCountry: optionSelectedTo.country,
      toAbbr: optionSelectedTo.abbr,
      date: inputDate,
      passengers: numOfPassengers,
    };

    setIsLoadingDisplayed(true);
    setIsLoading(true);

    flightsCollection
      .add(flightData)
      .then(docRef => {
        console.log('Objeto guardado con ID:', docRef.id);
        setIsSuccess(true);
      })
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsLoadingDisplayed(false);
          navigation.navigate('HomePageScreen');
        }, 1500);
      })
      .catch(error => {
        console.error('Error al guardar el objeto:', error);
      });
  };

  return (
    <View style={styles.fromFlightContainer}>
      <Loader
        openModal={isLoadingDisplayed}
        loadingText="Saving flight..."
        isLoading={isLoading}
        loadingFinishText={isSuccess ? 'Success!' : 'Error'}
        isSuccess={isSuccess}
      />
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
          <Text
            style={[
              styles.infoText,
              styles.textRight,
            ]}>{`${numOfPassengers} passengers`}</Text>
        </View>
      </View>

      <View style={{height: height * 0.15, justifyContent: 'center'}}>
        <TitleFlightComponent
          title="Your request was received."
          // paddingTop={230}
          marginTop={25}
        />
      </View>
      <View style={{height: height * 0.34}} />

      <View style={{height: height * 0.18}}>
        <ButtonFlightComponent onPressFn={saveFlight} isDisabled={false}>
          <Text style={styles.buttonText}>Finish</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
