/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */


import {View, Text} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import { useNavigation } from '@react-navigation/native';

const CommonSectionHeader = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Shop', {type:'all'});
  };

  return (
    <View style={responsiveStyle.headView}>
      <View>
        <Text style={responsiveStyle.text}>{props.head}</Text>
        <Text style={responsiveStyle.subText}>{props.content}</Text>
      </View>
      <Text style={responsiveStyle.subText} onPress={handleNavigate}>
        {props.rightText}
      </Text>
    </View>
  );
};

export default CommonSectionHeader;
