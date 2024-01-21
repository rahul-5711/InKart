/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */


import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import style from './style';
import colors from '../common/colors';

const CustomButton = props => {
  const {type, buttonText, handleButtonPress, icon} = props;
  return (
    <TouchableOpacity
      onPress={handleButtonPress}
      style={[
        style.button,
        {
          backgroundColor:
            type === 'primary' ? colors.primaryGreen : colors.secondaryGreen,
        },
      ]}>
        {type !== 'primary' ? <Image source={icon} style={style.icon} /> : null}
      <Text
        style={[
          {
            color: type === 'primary' ? colors.white : colors.black_level_3,
            fontFamily:
              type === 'primary' ? 'Lato-Bold' : 'Lato-Regular',
            fontSize: type === 'primary' ? 18 : 14,
          },
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
