/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import style from './style';
import colors from '../../components/common/colors';
import {useDimensionContext} from '../../context';

const CustomTextInput = props => {
  const {
    type,
    handleText,
    placeholder,
    value,
    check = false,
    multiline = false,
  } = props;
  const dimensions = useDimensionContext();

  const [show, setShow] = useState(false);
  const keyboardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : type === 'phone'
      ? 'phone-pad'
      : 'default';
  const secureTextEntry = type === 'password' ? (show ? false : true) : false;
  const icon =
    type === 'email'
      ? require('../../assets/images/email.png')
      : type === 'password'
      ? show
        ? require('../../assets/images/view.png')
        : require('../../assets/images/hide.png')
      : false;

  const handlePassword = () => {
    setShow(!show);
  };
  return (
    <View
      style={[
        style.container,
        {
          height:
            Platform.OS === 'ios'
              ? multiline
                ? dimensions.windowHeight * 0.09
                : dimensions.windowHeight * 0.04
              : multiline
              ? dimensions.windowHeight * 0.08
              : dimensions.windowHeight * 0.06,
        },
      ]}>
      <TextInput
        style={style.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        selectionColor={colors.primaryGreen}
        onChangeText={handleText}
        value={value}
        multiline={multiline}
      />
      {check ? <Text style={style.checkText}>Check</Text> : null}
      {!icon ? null : (
        <TouchableOpacity
          onPress={handlePassword}
          disabled={type !== 'password' ? true : false}>
          <Image style={style.icon} source={icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
