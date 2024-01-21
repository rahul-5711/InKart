/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../../components/common/colors';
import style from '../style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDimensionContext} from '../../../context';
import StarRating from 'react-native-star-rating-widget';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ProductReview = props => {
  const {product} = props;
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const [rating, setRating] = useState(3);
  const handleRedirect = () => {
    navigation.navigate('Review', {product: product});
  };
  return (
    <View style={{marginVertical:20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical:5,
        }}>
        <Text
          style={{
            color: colors.black_level_3,
            fontFamily: 'Lato-Regular',
            fontSize: 15,
          }}>
          Product Review (1)
        </Text>
        <TouchableOpacity onPress={handleRedirect}>
        <Text
          style={{
            color: colors.primaryGreen,
            fontFamily: 'Lato-Bold',
            fontSize: 16,
          }}>
          See All
        </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: colors.lightGrey,
          borderRadius: 8,
          marginVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={require('../../../assets/images/dummy-profile.png')}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              borderRadius: 25,
              overflow: 'hidden',
            }}
          />
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Lato-Bold',
              fontSize: 18,
              marginLeft: 10,
            }}>
            Mohan Kumar
            <StarRating starSize={15} rating={rating} onChange={() => {}} />
          </Text>
        </View>
        <Text
          style={{
            color: colors.black_level_3,
            fontFamily: 'Lato-Regular',
            fontSize: 16,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </View>
    </View>
  );
};

export default ProductReview;
