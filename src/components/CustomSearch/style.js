/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
    },
    newContainer: {
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 15,
    },
    search: {
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      width: width * 0.95,
    },
    newStyle: {
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      width: width * 0.80,
    },
    innerView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      width: 23,
      height: 23,
      resizeMode: 'contain',

    },
    textInput: {
      flex:1,
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      marginLeft: 12,
      color: colors.primaryGreen,
    },
    filter: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.primaryGreen,
    },
  });

export default style;
