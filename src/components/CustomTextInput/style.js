/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../common/colors';

const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryGreen,
    padding: 2, //3
    borderRadius: 8,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  textInput: {
    flex:1,
    color: colors.black_level_3,
    fontSize: 11,
    fontFamily: 'Lato-Regular',
  },
  icon: {
    width: width * 0.05,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  checkText: {
    fontFamily: 'Lato-Regular',
    color: colors.primaryGreen,
    fontSize: 18,
  },
});

export default style;
