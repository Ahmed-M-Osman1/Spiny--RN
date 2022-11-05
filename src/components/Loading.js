import { View, Text, Modal } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';

export default function Loading() {
  const modalVisible = useAppSelector((state) => state.isLoading);
  return (
    <Modal transparent animationType="slide" visible={modalVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 15,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: 'blackBlue',
            }}
          >
            Pick Up your movie please wait
          </Text>
          <View style={{ height: 150, width: 120 }}>
            <LottieView
              source={require('../../assets/loadingHero.json')}
              autoPlay
              loop
              speed={1.7}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
