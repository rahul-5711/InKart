/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor:colors.white,
    },
  });

export default style;
