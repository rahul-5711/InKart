/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    descHead: {
      color: colors.black,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
    },
    desc: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.grey,
    },
    commonText: {
      color: colors.shadow,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      lineHeight:25,
    },
    deliveryHead: {
      color: colors.black,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      marginBottom: 10,
    },
  });

export default style;
