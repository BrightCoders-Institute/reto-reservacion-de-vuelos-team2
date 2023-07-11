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
  closeModal,
  reset,
}) => {
  const selectLoaderContent = () => {
    const renderSuccessOrErrorMsg = () => {
        if(isSuccess) {
            return (
                <View>
                    <Icon name="check-circle" size={95} color="#607AEE" />
                    <Text
                        style={{color: '#607AEE', marginTop: 20, textAlign: 'center'}}>
                        {loadingFinishText}
                    </Text>
                </View>
            );
        } else {
            return (
                <View>
                    <Icon name="x-circle" size={95} color="red" />
                    <Text
                        style={{color: 'red', marginTop: 20, textAlign: 'center'}}>
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
              style={{color: '#607AEE', marginTop: 20, textAlign: 'center'}}>
              {loadingText}
            </Text>
          </View>
        ) : (
          renderSuccessOrErrorMsg()
        //   <View>
        //     <Icon name="check-circle" size={95} color="#607AEE" />
        //     <Text
        //       style={{color: '#607AEE', marginTop: 20, textAlign: 'center'}}>
        //       {loadingFinishText}
        //     </Text>
        //   </View>
        )}
      </View>
    );
  };

  return (
    <View>
      <Modal
        // animationType='none'
        transparent={true}
        visible={openModal}
        style={styles.loderContainer}>
        <View style={styles.overlay}>
          {/* {isLoadingDisplayed && <LoaderScreen loadingText="Signing up..." loadingFinishText="Signed Up" isLoading={isLoading} closeModal={setIsLoadingDisplayed} reset={setIsLoading} />} */}
          {openModal ? selectLoaderContent() : null}
        </View>
      </Modal>
    </View>
  );
};
