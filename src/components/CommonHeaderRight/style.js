/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../common/colors';


const style = (width, height) =>
  StyleSheet.create({
    padding: {padding: 15},
    image: {width: 30, height: 30, resizeMode: 'contain'},
    cartCount: {
        position:'absolute',
        right: 11,
        top:3,
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
      flexStyle: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
      }
  });

export default style;
