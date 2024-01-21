/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */


import {View, Text} from 'react-native';
import colors from '../../../components/common/colors';
import style from '../style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDimensionContext } from '../../../context';

const MoreInfo = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: dimensions.windowWidth * 0.43,
          justifyContent: 'center',
          backgroundColor: colors.lightGrey,
          padding: 15,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: colors.black_level_3,
            fontFamily: 'Lato-Regular',
            fontSize: 18,
          }}>
          500g/₹24.00
        </Text>
        <AntDesign name="down" size={25} color={colors.grey} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: dimensions.windowWidth * 0.43,
          justifyContent: 'center',
          backgroundColor: colors.lightGrey,
          padding: 15,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: colors.black_level_3,
            fontFamily: 'Lato-Regular',
            fontSize: 18,
          }}>
          Delivery Time
        </Text>
        <AntDesign name="down" size={25} color={colors.grey} />
      </View>
    </View>
  );
};

export default MoreInfo;
