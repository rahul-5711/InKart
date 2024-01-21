/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginVertical: 15,
      padding: 15,
      overflow: 'hidden',
      color: colors.white,
    },
    drawerView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 7,
      justifyContent: 'space-between',
    },
    drawerInnerView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    icon: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
    },
    arrow: {
      backgroundColor: colors.secondaryGreen,
      overflow: 'hidden',
      borderRadius: 15,
    },
    iconSecond: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      //color: colors.secondaryGreen,
      overflow: 'hidden',
      borderRadius: 25 / 2,
    },
    drawerText: {
      color: 'black',
      fontSize: 18,
      fontFamily: 'Lato-Regular',
      padding: 10,
    },
    logoutView: {
      borderColor: colors.black_level_3,
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 9,
      backgroundColor: colors.secondaryGreen,
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '50%',
      borderRadius: 20,
      flexDirection: 'row',
    },
    logoutText: {
      color: 'black',
      fontSize: 15,
      fontFamily: 'Lato-Regular',
    },
    supportView: {
      borderRadius: 20,
      backgroundColor: colors.secondaryGreen,
      padding: 15,
      marginVertical: 15,
    },
    supportTouch: {
      borderRadius: 20,
      backgroundColor: colors.primaryGreen,
      padding: 10,
      marginVertical: 15,
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    supportText: {
      color: colors.white,
      fontSize: 15,
      fontFamily: 'Lato-Regular',
    },
    supportHead: {
      color: 'black',
      fontSize: 15,
      fontFamily: 'Lato-Black',
      lineHeight: 25,
    },
    supportContent: {
      color: 'black',
      fontSize: 15,
      fontFamily: 'Lato-Regular',
      lineHeight: 19,
    },
    image: {
      width: width * 0.2,
      height: width * 0.2,
      borderRadius: width * 0.1,
    },
    accountTouch: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      color: colors.black_level_3,
      paddingVertical: 15,
    },
    accountImageView: {
      width: 75,
      height: 75,
      borderRadius: 75 / 2,
      backgroundColor: colors.white_level_3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonMargin: {marginVertical: 15},
    email: {
      color: colors.black_level_2,
      fontSize: 15,
      fontFamily: 'Lato-Regular',
    },
    name: {
      color: colors.black_level_1,
      fontSize: 20,
      fontFamily: 'Lato-Bold',
    },
    nameView: {marginLeft: 15, width: '80%'},
  });

export default style;
