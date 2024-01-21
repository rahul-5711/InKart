/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    categories: {
      backgroundColor:colors.secondaryGreen,
    },
    contentStyle: {
      justifyContent:'space-around',
      alignItems:'center',
    },
    catItemView: {
      margin: 10,
    },
    catItem: {
      fontFamily:'Lato-Regular',
      fontSize:18,
      color:colors.primaryGreen,
    },
    productView: {
      width: '100%',
      padding: 15,
      marginRight: 15,
      marginVertical: 15,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      overflow: 'hidden',
    },
    productImage:{
      width: 75,
      height: 75,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
    },
    nameView:{
      width:'80%',
      borderLeftWidth: 1,
      paddingHorizontal: 10,
      marginLeft: 10,
      overflow:'hidden',
    },
    name:{
      color: colors.black_level_1,
      fontFamily: 'Lato-Bold',
      fontSize: 20,
    },
    des:{
      color: colors.black_level_3,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    priceView:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    priceView2:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    price:{
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color:colors.black_level_1,
      marginHorizontal:10,
    },
    offView: {
      padding:5,
      borderRadius:15,
      backgroundColor:colors.primaryGreen,
    },
    offText:{
      fontFamily:'Lato-Bold',
      color:colors.white,
      marginHorizontal:10,
    },
    qunView: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      borderRadius:15,
      borderWidth:1,
      borderColor:colors.primaryGreen,
      overflow:'hidden',
      paddingVertical:10,
      margin:8,
    },
    qunText1:{
      fontFamily:'Lato-Bold',
      fontSize:20,
      color:colors.black,
      marginHorizontal:5,
    },
    qunText2:{
      fontFamily:'Lato-Bold',
      fontSize:18,
      color:colors.primaryGreen,
      marginHorizontal:7,
    },
    commonPadding: {
      padding:15,
    },
  });

export default style;
