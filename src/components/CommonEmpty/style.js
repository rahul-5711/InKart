/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
        borderRadius:10,
        borderColor:colors.red,
        borderWidth:1,
        padding:10,
        backgroundColor:colors.tranred,
    },
    title: {
        fontFamily:'Lato-Regular',
        fontSize:18,
        color:colors.red,
    },
  });

export default style;
