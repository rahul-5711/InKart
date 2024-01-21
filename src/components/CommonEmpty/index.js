/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View,Text} from 'react-native';
import { useDimensionContext } from '../../context';
import style from './style';

const CommonEmpty = props => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
        dimensions.isPortrait,
      );
    return (
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.title}>{props.title}</Text>
        </View>
    );
};
export default CommonEmpty;
