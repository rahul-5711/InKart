/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      backgroundColor: colors.white_level_3,
      padding: 15,
    },
    cartIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginRight: 15,
    },
    productImage: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    productView: {
      alignSelf:'center',
      backgroundColor:colors.white,
      borderRadius:15,
      flexDirection:'row',
      alignItems:'center',
      width: width * 0.95,
      padding:15,
      marginTop:15,
    },
    secondView: {
      borderLeftColor:colors.grey,
      borderLeftWidth:1,
      paddingLeft:10,
      marginLeft:10,
      width: width * 0.6,
      overflow:'hidden',
    },
    title: {
      color:colors.black,
      fontFamily:'Lato-Bold',
      fontSize:18,
    },
    price: {
      color:colors.black,
      fontFamily:'Lato-Bold',
      fontSize:13,
    },
    desc: {
      color:colors.black_level_3,
      fontSize: 16,
      fontFamily:"Lato-Regular",
    },
    bottomView: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:5,
    },
    offView: {
      borderRadius:15,
      backgroundColor:colors.primaryGreen,
      padding:5,
      marginHorizontal:5,
    },
    offText: {
      color:colors.white,
      fontSize: 12,
      fontFamily:"Lato-Regular",
    },
    cartView: {
      borderRadius:15,
      borderColor:colors.primaryGreen,
      borderWidth:1,
      padding:5,
      marginHorizontal:5,
    },
    cartText: {
        color:colors.primaryGreen,
        fontSize: 12,
        fontFamily:"Lato-Regular",
    },
    removeView: {
      position:'absolute',
      top:-10,
      right:0,
      borderRadius:10,
      overflow:'hidden',
      padding:15,
    },
    remove: {
      width:20,
      height:20,
      resizeMode:'contain',
    },
    cartCount: {
      position:'absolute',
      right:15,
      top:-10,
      backgroundColor:colors.red,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      overflow:'hidden',
      paddingHorizontal:5,
      zIndex:9,
    },
    count: {
      fontFamily:'Lato-Bold',
      fontSize:15,
      color:colors.white,
    },
  });

export default style;
