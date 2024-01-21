/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../common/colors';
import { ComplexAnimationBuilder } from 'react-native-reanimated';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      marginVertical: 3,
      padding: 15,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: colors.primaryGreen,
      height: isPortrait ? height * 0.11 : height * 0.2,
    },
    touchContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyle: {
      width: isPortrait ? width * 0.08 : height * 0.07,
      height: isPortrait ? width * 0.08 : height * 0.07,
      resizeMode: 'contain',
    },
    footerText: {
      color: colors.white,
      fontSize: 15,
      fontFamily: 'Lato-Bold',
      marginTop: 5,
    },
    dot: {
        fontSize:42,
        color:colors.white,
        textAlign:'center',
        marginTop:-25,
    },
    cartCount: {
      position:'absolute',
      right:-8,
      top:-2,
      backgroundColor:colors.red,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      overflow:'hidden',
      paddingHorizontal:6,
      paddingVertical:2,
      zIndex:9,
    },
    count: {
      color:colors.white,
      fontFamily:'Lato-Regular',
      fontSize:16,
      textAlign:'center',
    },
  });

export default style;
