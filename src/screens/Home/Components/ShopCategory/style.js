/* eslint-disable prettier/prettier */


import { StyleSheet } from 'react-native';
import colors from '../../../../components/common/colors';


const style = (width,height) =>
StyleSheet.create({
    container: {
        margin:15,
    },
    head: {
        color:colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        textAlign: 'center',
    },
    flatList: {
        marginVertical:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerView: {
        justifyContent:'center',
        alignItems:'center',
        marginRight:15,
        marginBottom:15,
    },
    itemName: {
        fontFamily: 'Lato-Regular',
        fontSize:15,
        color:colors.black_level_1,
    },
    image: {
        width: width * 0.1,
        height: width * 0.1,
        resizeMode: 'contain',
    },
    imaageView: {
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20,
        padding:13,
        marginBottom: 10,
    },
});

export default style;
