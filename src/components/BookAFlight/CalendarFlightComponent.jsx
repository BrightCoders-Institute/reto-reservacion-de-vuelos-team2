import React, {useState, useCallback, useMemo} from 'react';
import {ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ArrowLeft} from './ArrowLeft';
import {ArrowRight} from './ArrowRight';

let fecha = new Date();
let year = fecha.getFullYear();
let month = ('0' + (fecha.getMonth() + 1)).slice(-2);
let day = ('0' + fecha.getDate()).slice(-2);
let fechaFormateada = year + '-' + month + '-' + day;
const INITIAL_DATE = fechaFormateada;

export const CalendarFlightComponent = ({onChangeDateFn}) => {
  const [selected, setSelected] = useState(INITIAL_DATE);

  const onDayPress = useCallback(day => {
    setSelected(day.dateString);
    onChangeDateFn(day);
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'blue',
        selectedTextColor: 'white',
      },
    };
  }, [selected]);

  const renderArrow = direction => {
    if (direction === 'left') {
      return <ArrowLeft />;
    } else {
      return <ArrowRight />;
    }
  };

  const renderCalendarWithSelectableDate = () => {
    return (
      <Calendar
        enableSwipeMonths
        current={INITIAL_DATE}
        style={{marginTop: 10}}
        onDayPress={onDayPress}
        markedDates={marked}
        renderArrow={renderArrow}
        theme={{
          monthTextColor: 'black',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 25,

          textDayFontSize: 17,
          textDayFontWeight: '400', // days
          textSectionTitleColor: 'black', // color of the weekdays
          textDayHeaderFontWeight: '800',
          weekVerticalMargin: 12,
        }}
      />
    );
  };

  const renderExamples = () => {
    return <>{renderCalendarWithSelectableDate()}</>;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderExamples()}
    </ScrollView>
  );
};
