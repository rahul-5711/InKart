/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import style from './style';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import {validateOtp, validatePhone} from './controller';
import { useDimensionContext } from '../../context';

const LogInPhone = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [showOtp, setShowOtpFailed] = useState(false);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

  const handleButtonPress = async () => {
    try {
      setError(null);
      if (validatePhone(phone.trim())) {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        if (confirmation) {
          Snackbar.show({
            text: 'Verification code is sent to your mobile number, Please Verify',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: colors.primaryGreen,
            textColor: colors.black,
          });
          setConfirm(confirmation);
          setShowOtpFailed(true);
        }
      }else{
        setError('Given Phone Number is Incorrect');
      }
    } catch (error) {
      setError('Given Phone Number is Incorrect');
    }
    const confirmation = await auth().signInWithPhoneNumber(phone);
    console.warn(confirmation);
  };

  const handleGotoLogIn = () => {
    navigation.goBack();
  };

  const handleVerifyOtp = async () => {
    if (otp.trim() !== ''&& validateOtp(otp.trim())) {
      const res = await confirm.confirm(otp.trim());
      if (res) {
        Snackbar.show({
          text: 'Your phone number is verified, Login Successful',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.primaryGreen,
          textColor: colors.black,
        });
        navigation.navigate('Home');
      }
    } else {
      setError('Entered otp is not valid');
    }
  };

  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/topBg.png')}
        style={responsiveStyle.topBg}
      />
      <ScrollView style={responsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={responsiveStyle.logo}
        />
        <Text style={responsiveStyle.loginText}>Login with Phone</Text>
        {error !== null ? <Text style={responsiveStyle.errorText}>{error}</Text> : null}

        <CustomTextInput
          handleText={text => setPhone(text)}
          placeholder="Phone Number"
          type="phone"
        />

        {showOtp ? (
          <CustomTextInput
            handleText={text => setOtp(text)}
            placeholder="Enter Otp"
            type="phone"
          />
        ) : null}

        <CustomButton
          type="primary"
          handleButtonPress={showOtp ? handleVerifyOtp : handleButtonPress}
          buttonText={showOtp ? 'Verify OTP ' : 'Sign In with Phone'}
        />

        <Text onPress={handleGotoLogIn} style={responsiveStyle.createNew}>
          Go To Login
        </Text>
      </ScrollView>
    </View>
  );
};

export default LogInPhone;
