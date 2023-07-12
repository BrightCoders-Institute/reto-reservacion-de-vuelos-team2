import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import WheelPicker from 'react-native-wheely';

const wheelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const PassengersFlightPicker = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        console.log(wheelOptions[selectedIndex]);
    }, []);

    const selectPassengers = (val) => {
        setSelectedIndex(val);
        console.log(wheelOptions[val]);
    };

    return (
        <WheelPicker
            selectedIndex={selectedIndex}
            options={wheelOptions}
            onChange={selectPassengers}
            itemHeight={55}
            selectedIndicatorStyle={{borderBottomWidth: .5, borderTopWidth: .5, backgroundColor: 'white',}}
            containerStyle={{width: '80%'}}
            itemTextStyle={{color: 'black', fontSize: 25, fontWeight: 'bold',}}
            // itemStyle={{backgroundColor: 'red'}}
        />
    );
};
