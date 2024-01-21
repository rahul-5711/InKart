/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';


const style = (width,height,isPortrait) =>
 StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    borderBottomColor: colors.black_level_3,
    borderBottomWidth: 1,
  },
  head: {
    color: colors.black_level_1,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 50,
  },
  content: {
    color: colors.black_level_1,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    lineHeight: 30,
  },
  endContent: {
    color: colors.black_level_3,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 10,
  },
  endHead: {
    color: colors.white_level_3,
    fontFamily: 'Lato-Black',
    fontSize: 20,
    lineHeight: 50,
  },
  total: {
    color: colors.black_level_1,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    lineHeight: 50,
  },
});

export default style;
