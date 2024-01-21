/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';



const style = (width,height) =>
 StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal:15,
    padding:15,
  },
  title: {
    fontFamily:'Lato-Bold',
    fontSize:18,
    color:colors.black,
  },
  flatList: {
    alignItems:'center',
    marginVertical:15,
  },
  imageCon:{
    padding: 15,
    borderRadius:15,
    overflow:'hidden',
    marginRight:15,
  },
  image: {
    width:width * 0.15,
    height: height * 0.07,
    resizeMode:'contain',
  },
});

export default style;
