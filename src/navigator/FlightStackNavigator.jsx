import { createStackNavigator } from '@react-navigation/stack';
import { FromFlightScreen1 } from '../screens/BookAFlight/01FromFlightScreen';
import { ToFlightScreen2 } from '../screens/BookAFlight/02ToFlightScreen';
import { DateFlightScreen3 } from '../screens/BookAFlight/03DateFlightScreen';
import { PassengersFlightScreen4 } from '../screens/BookAFlight/04PassengersFlightScreen';
import { ResultsFlightScreen5 } from '../screens/BookAFlight/05ResultsFlightScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

export const FlightStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                  <Icon
                    name="arrow-back-ios"
                    size={30}
                    color="#607AEE"
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                  />
                ),
                title: '',
                cardStyle: { backgroundColor: 'white' },
                headerStyle: { elevation: 0, shadowColor: 'transparent'}
            })}
        >
            <Stack.Screen name="FromScreen" component={ FromFlightScreen1 }/>
            <Stack.Screen name="ToScreen" component={ ToFlightScreen2 }/>
            <Stack.Screen name="DateScreen" component={ DateFlightScreen3 }/>
            <Stack.Screen name="PassengersScreen" component={ PassengersFlightScreen4 }/>
            <Stack.Screen name="ResultsScreen" component={ ResultsFlightScreen5 }/>
        </Stack.Navigator>
    );
};