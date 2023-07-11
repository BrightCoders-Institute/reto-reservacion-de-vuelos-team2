import React from 'react';
import {View, ActivityIndicator, Text, Modal} from 'react-native';
import {styles} from '../styles/AppStyles';
import Icon from 'react-native-vector-icons/Octicons';

export const Loader = ({
  openModal,
  loadingText,
  isLoading,
  loadingFinishText,
  isSuccess,
}) => {
  const selectLoaderContent = () => {
    const renderSuccessOrErrorMsg = () => {
      if (isSuccess) {
        return (
          <View>
            <Icon name="check-circle" size={95} color="#607AEE" style={{textAlign: 'center'}} />
            <Text
              style={{color: '#607AEE', marginTop: 20, textAlign: 'center', fontSize: 16}}>
              {loadingFinishText}
            </Text>
          </View>
        );
      } else {
        return (
          <View>
            <Icon name="x-circle" size={95} color="#FF0909" style={{textAlign: 'center'}} />
            <Text style={{color: '#FF0909', marginTop: 20, textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
              {loadingFinishText}
            </Text>
          </View>
        );
      }
    };
    return (
      <View style={styles.loadingContent}>
        {isLoading ? (
          <View>
            <ActivityIndicator size={110} color="#607AEE" />
            <Text
              style={{color: '#607AEE', marginTop: 20, textAlign: 'center', fontSize: 16}}>
              {loadingText}
            </Text>
          </View>
        ) : (
          renderSuccessOrErrorMsg()
        )}
      </View>
    );
  };

  return (
    <View>
      <Modal
        transparent={true}
        visible={openModal}
        style={styles.loderContainer}>
        <View style={styles.overlay}>
          {openModal ? selectLoaderContent() : null}
        </View>
      </Modal>
    </View>
  );
};
