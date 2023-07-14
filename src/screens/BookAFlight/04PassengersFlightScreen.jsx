import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {PassengersFlightPicker} from '../../components/BookAFlight/PassengersFlightPicker';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';

export const PassengersFlightScreen4 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: 80}}>
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
        </View>
      </View>

      <TitleFlightComponent title="How many passengers?" marginTop={48} />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 100,
        }}>
        <PassengersFlightPicker />
      </View>

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('ResultsScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
