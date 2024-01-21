/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';


const style= (width,height,isPortrait) =>
 StyleSheet.create({
  container: {
    height: height,
    backgroundColor: colors.white_level_2,
  padding:20,
  },
  head: {
    fontFamily:'Lato-Bold',
    fontSize:25,
    color:colors.black,
    textAlign:'center',
  },
  userImage: {
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:25,
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
  },
  bigImage: {
    width: width * 0.8,
    height: width * 0.8,
  },
  edit:{
    width:40,
    height:40,
    resizeMode:'contain',
    position:'absolute',
    right:0,
    bottom:0,
  },
  editTouch: {
    position:'absolute',
    right:0,
    bottom:0,
  },
  modelBack: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  //close: {
  //  backgroundColor:colors.white,
  //  borderRadius:25,
  //  position:'absolute',
  //},
  closeIcon: {
    width:40,
    height:40,
    resizeMode:'contain',
    position:'absolute',
    backgroundColor:colors.white,
    //left:100,
    right:-25,
    bottom:10,
    borderRadius:20,
  },
  closeIcon1: {
    width:40,
    height:40,
    resizeMode:'contain',
    position:'absolute',
    backgroundColor:colors.white,
    right:-150,
    bottom:5,
    borderRadius:20,
  },
  selectBox: {
    backgroundColor:colors.white_level_2,
    padding:25,
    borderRadius:15,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
  },
  touch: {
    padding:10,
    justifyContent:'center',
    backgroundColor:colors.primaryGreen,
    borderRadius:15,
    marginHorizontal:10,
  },
  text: {
    fontFamily:'Lato-Regular',
    fontSize:18,
    color:colors.white,
  }
});

export default style;
