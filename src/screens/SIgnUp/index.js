/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/common/validations';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, SetError] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '409535420684-uqmk3rd1lpmd7obhvtoskfj5q9odl6fd.apps.googleusercontent.com',
    });
  }, []);

  const handleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  };

  const handleGotoLogIn = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    if (
      username.trim() !== '' &&
      email.trim() !== '' &&
      mobile.trim() !== '' &&
      password.trim() !== '' &&
      cpassword.trim()
    ) {
      if (validateEmail(email.trim())) {
        if (validatePhoneNumber(mobile.trim())) {
          if (password.trim() === cpassword.trim()) {
            await firestore()
              .collection('Users')
              .where('username', '==', username.trim())
              .where('email', '==', email.trim())
              .get()
              .then(async snapshot => {
                if (snapshot.empty) {
                  if (validateEmail(email.trim())) {
                    if (validatePhoneNumber(mobile.trim())) {
                      const useState = {
                        username: username.trim(),
                        email: email.trim(),
                        mobilenumber: mobile.trim(),
                        password: password.trim(),
                        created: String(new Date()),
                        updated: String(new Date()),
                      };
                      await firestore()
                        .collection('Users')
                        .add(useState)
                        .then(resp => {
                          console.warn(resp);
                          Snackbar.show({
                            text: 'A new Account is created',
                            backgroundColor: colors.primaryGreen,
                            textColor: colors.white,
                            duration: Snackbar.LENGTH_LONG,
                          });
                          navigation.navigate('Home');
                        })
                        .catch(err => {
                          console.warn(err);
                        });
                    } else {
                      SetError('Given mobile number is not valid');
                    }
                  } else {
                    SetError('Given email is not valid');
                  }
                } else {
                  Snackbar.show({
                    text: 'This email is already existing on our system, try using another ',
                    backgroundColor: colors.red,
                    textColor: colors.white,
                    duration: Snackbar.LENGTH_LONG,
                  });
                }
              });
          } else {
            SetError('Given Password are not matching');
          }
        } else {
          SetError('Given mobile number  is not valid');
        }
      } else {
        SetError('Given Email is not valid');
      }
    } else {
      SetError('Fill up all the field to continue');
    }
  };

  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/images/topBg.png')}
        style={style.topBg}
      />
      <ScrollView style={style.ScrollView} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={style.logo}
        />
        <Text style={style.loginText}>Sign Up Account</Text>

        {error !== null ? (
          <View style={style.errorView}>
            <Text style={style.errorText}>{error}</Text>
          </View>
        ) : null}

        <CustomTextInput
          handleText={text => setUsername(text)}
          placeholder="Username"
        />

        <CustomTextInput
          type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address"
        />

        <CustomTextInput
          type="phone"
          handleText={text => setMobile(text)}
          placeholder="Mobile Number"
        />

        <CustomTextInput
          type="password"
          handleText={text => setPassword(text)}
          placeholder="Password"
        />

        <CustomTextInput
          type="password"
          handleText={text => setCpassword(text)}
          placeholder="Confirm Password"
        />

        <CustomButton
          type="primary"
          handleButtonPress={handleSignUp}
          buttonText={'Sign Up'}
        />

        <View style={style.dottedlineContainer}>
          <View style={style.overflow}>
            <View style={style.dashedLine} />
          </View>
          <View style={style.textContainer}>
            <Text style={style.dashedText}>Or SignUp with</Text>
          </View>
        </View>

        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText={'Sign Up with Google'}
          icon={require('../../assets/images/google.png')}
        />

        <Text onPress={handleGotoLogIn} style={style.createNew}>
          Go to Login
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;
