/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {Text, View} from 'react-native';
import colors from '../../../components/common/colors';
import CustomTextInput from '../../../components/CustomTextInput';
import { useDimensionContext } from '../../../context';
import style from './style';

const DeliveryInfo = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
        dimensions.isPortrait,
      );
  return (
    <View>
      <Text
        style={responsiveStyle.deliveryHead}>
        Check Delivery
      </Text>
      <Text
        style={
          responsiveStyle.commonText
        }>
        Enter pincode to check delivery date/pickup option
      </Text>
      <CustomTextInput
        type={'default'}
        check={true}
        handleText={() => console.log('hello')}
        placeholder={'Pin Code'}
      />
      <Text
        style={
          responsiveStyle.commonText
        }>
        Free Delivery on orders above 200.00
      </Text>
      <Text
        style={
          responsiveStyle.commonText
        }>
        Cash on Delivery available
      </Text>
      <Text
        style={
          responsiveStyle.commonText
        }>
        Easy 21 days return and exchange
      </Text>
    </View>
  );
};

export default DeliveryInfo;
