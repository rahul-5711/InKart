/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white_level_2,
  },
  main: {
    flex: 1,
  },
  footText:{
    fontFamily:'Lato-Bold',
    fontSize:22,
    color:colors.grey,
    padding:15,
  },
  footButton:{
    padding:15,
    backgroundColor:colors.primaryGreen,
    width:'40%',
    marginHorizontal:15,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50,
    borderRadius:8,
  },
  footButtonText:{
    fontFamily:'Lato-Bold',
    fontSize:14,
    color:colors.white,
  },
});

export default style;
