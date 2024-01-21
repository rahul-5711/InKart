/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';


const style = (width, height) =>
  StyleSheet.create({
    padding: {padding: 15},
    image: {width: 30, height: 30, resizeMode: 'contain'},
  });

export default style;
