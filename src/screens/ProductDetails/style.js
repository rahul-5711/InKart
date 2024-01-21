/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    proImage: {
      width:width,
      height:width  * 0.7,
      resizeMode:'contain',
      marginVertical: 25,
    },
    heart: {
      position:'absolute',
      right:0,
      marginTop: 10,
    },
    mainView: {
      backgroundColor:colors.white,
      padding:width * 0.05,
      borderTopLeftRadius:30,
      borderTopRightRadius: 30,
      shadowColor:'#000',
      shadowOffset:{width:2,height:2},
      shadowRadius: 5,
      elevation:15,
      paddingBottom:100,
    },
    name: {
      color:colors.black,
      fontFamily:'Lato-Black',
      fontSize:30,
      marginBottom:10,
    },
    price: {
      color:colors.black_level_3,
      fontFamily:'Lato-Bold',
      fontSize:20,
      marginVertical:10,
    },
    descHead: {
      color:colors.black,
      fontFamily:'Lato-Bold',
      fontSize:18,
    },
    desc: {
      fontFamily:'Lato-Regular',
      fontSize:18,
      color:colors.grey,
    },
  });

export default style;
