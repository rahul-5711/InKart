/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {height: height, backgroundColor: colors.white_level_3},
    flatView: {
      backgroundColor: colors.secondaryGreen,
      borderRadius: 15,
      padding: 10,
      overflow: 'hidden',
      marginTop: 15,
      marginHorizontal: 15,
    },
    innerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: colors.grey,
      borderBottomWidth: 1,
      paddingBottom: 15,
    },
    orderId: {
      color: colors.black,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
    },
    mapImage: {
      width: 100,
      height: 100,
      borderRadius: 15,
      overflow: 'hidden',
      resizeMode: 'contain',
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
    },
    bottomText: {
      color: colors.black_level_3,
      fontFamily: 'Lato-Regular',
      fontSize: 14,
    },
    greenText: {
      color: colors.primaryGreen,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    address: {
      color: colors.grey,
      fontFamily: 'Lato-Regular',
      fontSize: 13,
    },
    paidText: {
      color: colors.black,
      fontFamily: 'Lato-Regular',
      fontSize: 14,
    },
  });

export default style;
