/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDimensionContext} from '../../context';
import {validateEmail} from '../../components/common/validations';
import {useDispatch} from 'react-redux';
import {login} from '../../storage/action';

const Login = () => {
  const dimensions = useDimensionContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  function onAuthStateChanged(user) {
    //console.warn('onAuthStateChanged', user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleLogin = async () => {
    if (email.trim() !== '' && password.trim() !== '') {
      if (validateEmail(email.trim())) {
        await firestore()
          .collection('Users')
          .where('email', '==', email.trim().toLocaleLowerCase())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              Snackbar.show({
                text: 'This user is not registered with us, try creating new account',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.red,
                textColor: colors.white,
              });
            } else {
              snapshot.forEach(documentSnapshot => {
                const respData = documentSnapshot.data();
                console.warn(respData);
                if (password.trim() === respData.password) {
                  Snackbar.show({
                    text: 'Login Successful',
                    backgroundColor: colors.primaryGreen,
                    textColor: colors.white,
                    duration: Snackbar.LENGTH_LONG,
                  });
                  dispatch(
                    login({
                      userId: documentSnapshot.id,
                      firstName: respData.firstName,
                      lastName: respData.lastName,
                      email: respData.email,
                      mobileNumber: respData.mobilenumber,
                      profileImage: respData.profileImage,
                    }),
                  );
                  //navigation.navigate('MyDrawer');
                } else {
                  Snackbar.show({
                    text: 'The password entered is wrong',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.red,
                    textColor: colors.white,
                  });
                }
              });
            }
          })
          .catch(err => console.warn(err));
      } else {
        Snackbar.show({
          text: 'Enter a valid email address',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
    } else {
      Snackbar.show({
        text: 'Fill up the fields to continue',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };

  const handleGotoSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleGotoLoginPhone = () => {
    navigation.navigate('LogInPhone');
  };

  const handleButtonPress = () => {};

  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/topBg.png')}
        style={responsiveStyle.topBg}
      />
      <ScrollView
        style={responsiveStyle.ScrollView}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={responsiveStyle.logo}
        />
        <Text style={responsiveStyle.loginText}>Login Account</Text>

        <CustomTextInput
          type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address"
        />
        <CustomTextInput
          type="password"
          handleText={text => setPassword(text)}
          placeholder="Password"
        />

        <CustomButton
          type="primary"
          handleButtonPress={handleLogin}
          buttonText={'Sign In'}
        />

        <Text onPress={handleGotoSignUp} style={responsiveStyle.createNew}>
          If you are new, Create Now
        </Text>

        <View style={responsiveStyle.dottedlineContainer}>
          <View style={responsiveStyle.overflow}>
            <View style={responsiveStyle.dashedLine} />
          </View>
          <View style={responsiveStyle.textContainer}>
            <Text style={responsiveStyle.dashedText}>Or Login with</Text>
          </View>
        </View>

        <CustomButton
          type="secondary"
          handleButtonPress={handleGotoLoginPhone}
          buttonText={'Sign in with Phone'}
          icon={require('../../assets/images/smartphone.png')}
        />

        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText={'Sign in with Google'}
          icon={require('../../assets/images/google.png')}
        />
      </ScrollView>
      <View style={responsiveStyle.footer}>
        <Text style={responsiveStyle.footerText}>Login as a Guest</Text>
      </View>
    </View>
  );
};

export default Login;
