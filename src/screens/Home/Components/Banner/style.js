/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    banner: {
        width: width * 0.85,
        height: height * 0.2,
        resizeMode: 'contain',
        borderRadius:15,
        overflow: 'hidden',
        margin:15,
    },
    innerView: {
        padding:15,
    },
    head:{
        color:colors.black,
        fontFamily:'Lato-Black',
        fontSize:25,
    },
    content: {
        color:colors.black,
        fontFamily:'Lato-Regular',
        fontSize:18,
    },
    touch: {
        backgroundColor: colors.primaryGreen,
        padding:3,
        justifyContent:'center',
        alignItems:'center',
        width:width * 0.3,
        height:width * 0.1,
        marginVertical: 10,
        borderRadius:10,
    },
    touchText: {
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:colors.white,
    },
  });

export default style;
