/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */

import {View, Text, Image, ScrollView} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import StarRating from 'react-native-star-rating-widget';
import colors from '../../components/common/colors';
import ActionSheet from 'react-native-actions-sheet';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Review = () => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const [rating, setRating] = useState(3);
  const actionSheetRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" cart={true} />,
      headerRight: () => (
        <CommonHeaderRight plus={true} handlePlusIcon={openActionSheet} />
      ),
      title: 'Reviews',
    });
  }, []);

  const openActionSheet = () => {
    actionSheetRef.current.show();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>
      <View style={responsiveStyle.reviewBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={require('../../assets/images/dummy-profile.png')}
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
            <StarRating starSize={20} rating={rating} onChange={setRating} />
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
      <ActionSheet ref={actionSheetRef}>
        <View style={{padding: 20}}>
          <Text
            style={{color: colors.black,fontFamily: 'Lato-Black', fontSize: 20, lineHeight: 50}}>
            Write a Review
          </Text>
          <StarRating starSize={40} rating={rating} onChange={setRating} />
          <CustomTextInput placeholder="Write Here" multiline={true} />
          <CustomButton buttonText={'Submit Review'} type='primary' />
        </View>
      </ActionSheet>
    </ScrollView>
  );
};

export default Review;
