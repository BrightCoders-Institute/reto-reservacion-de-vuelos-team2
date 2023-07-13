import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/AppStyles';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import firestore from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window');

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
        console.log(arrayAirports);
        setAirportsData(arrayAirports);
      })
      .catch(error => {
        console.log('Error al obtener los documentos:', error);
      });
  };

  const handleInput = (text) => {
    setInputText(text);
    setSelectedOption(null);
    if (text.trim() !== '') {
      const filteredOptions = airportsData.filter(item =>
        item.city.toLowerCase().includes(text.toLowerCase()) ||
        item.country.toLowerCase().includes(text.toLowerCase())
      );
      setMatchedOptions(filteredOptions);
    } else {
      setMatchedOptions([]);
    }
  };

  const handleItemPress = (item) => {
    setInputText(`${item.city}, ${item.country}`);
    setSelectedOption(item);
    setMatchedOptions([]);
    console.log(`${item.city}, ${item.country}`);
  };

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: height*.13, backgroundColor: 'red'}} />
      <View style={{height: height*.12, backgroundColor: 'blue', justifyContent: 'center'}}>
        <TitleFlightComponent
          title="Where are you now?"
          // paddingTop={115}
          // marginTop={40}
        />
      </View>

      {/* <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: height*.55, backgroundColor: 'green'}}>
        <TextFieldFlight
          inputPlaceholder="Select location"
          inputValue={inputText}
          onChangeTextFn={handleInput}
        />
        <FlatList
          data={matchedOptions}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <Text key={item.id}>{`${item.city}, ${item.country}`}</Text>
            </TouchableOpacity>
          )}
          // style={{backgroundColor: 'red'}}
          keyExtractor={(item) => item.id}
        />
      </View> */}

      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: height*.55, backgroundColor: 'green'}}>
        <TextFieldFlight
          inputPlaceholder="Select location"
          inputValue={inputText}
          onChangeTextFn={handleInput}
        />
        <FlatList
          data={matchedOptions}
          renderItem={({ item }) => (
            <TouchableOpacity style={{height: 45}} onPress={() => handleItemPress(item)}>
              <Text key={item.id}>{`${item.city}, ${item.country}`}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          style={{ maxHeight: height * 0.25 }}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>

      <View style={{height: height*.18, backgroundColor: 'orange'}}>
        <ButtonFlightComponent
          onPressFn={() => navigation.navigate('ToScreen')}
          isDisabled={false}>
          <Text style={styles.buttonText}>Next</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
