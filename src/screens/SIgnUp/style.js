/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {flex: 1, height: height},
  topBg: {
    width: width,
    height: height * 0.2,
    resizeMode: 'cover',
  },
  ScrollView: {
    flex: 1,
    backgroundColor: colors.white_level_1,
    marginTop: -width * 0.2,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    overflow: 'hidden',
    padding: width * 0.03,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.2,
    resizeMode: 'contain',
  },
  loginText: {
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    color: colors.steel,
  },
  createNew: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.steel,
    textAlign: 'center',
    marginVertical: width * 0.025,
    paddingBottom:width * 0.2,
  },
  footer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryGreen,
  },
  dottedlineContainer: {
    marginVertical:15,
  },
  overflow: {
    overflow:'hidden',
  },
  dashedLine: {
    borderStyle:'dashed',
    borderWidth:1,
    borderColor:colors.grey,
  },
  textContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:-13,
    backgroundColor:colors.white_level_2,
    //width:150,
  },
  dashedText: {
    textAlign:'center',
    color:colors.black_level_2,
    fontFamily:'Lato-Regular',
    fontSize:14,
  },
  errorText: {
    color: colors.red,
    fontFamily: 'Lato-Regular',
    fontSize:14,
  },
  errorView: {
    marginTop:15,
  },
});

export default style;
