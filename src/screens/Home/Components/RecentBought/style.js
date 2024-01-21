/* eslint-disable prettier/prettier */


import { StyleSheet } from 'react-native';
import colors from '../../../../components/common/colors';


const style = (width,height) =>
StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryGreen,
        borderRadius: 15,
        margin:15,
        padding:15,
    },
    head: {
        color:colors.black,
        fontFamily:'Lato-Bold',
        fontSize:18,
        //marginBottom:1,
    },
    contentView: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 15,
        borderRadius: 15,
    },
    image: {
        width: 40,
        height:40,
        resizeMode:'contain',
    },
});

export default style;
