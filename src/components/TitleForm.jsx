import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/AppStyles';

export const TitleForm = ({ title }) => {

  return (
    <View>
      <Text style={styles.formTitle}>{ title }</Text>
    </View>
  );
};