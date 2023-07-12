import React from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';

export const ResultsFlightScreen5 = ({navigation}) => {
  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: 80, marginTop: 140}}>
        <View style={[styles.topContainer, styles.underlineContainer]}>
          <View style={styles.ToFromContainer}>
            <FromContent />
          </View>

          <Icon name="airplane" size={25} color="#899FFF" />

          <View style={styles.ToFromContainer}>
            <ToContent />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.infoText}>September 3, 2020</Text>
          <Text style={[styles.infoText, styles.textRight]}>2 passengers</Text>
        </View>
      </View>

      <TitleFlightComponent
        title="Your request was received."
        paddingTop={230}
      />

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('HomePageScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Finish</Text>
      </ButtonFlightComponent>
    </View>
  );
};
