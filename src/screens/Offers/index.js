/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {FlatList, ScrollView, Text, View} from 'react-native';
import style from './style';
import CustomSearch from '../../components/CustomSearch';
import colors from '../../components/common/colors';
import { useDimensionContext } from '../../context';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const Offers = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft/>,
    });
  }, []);
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
  );
  const offersArray = [
    {
      offer: '41',
      head: 'Midnight Sale Offer',
      content: 'on all orders above Rs.900',
      code: 'YT86R',
    },
    {
      offer: '50',
      head: 'Monsoon Sale Offer',
      content: 'on all orders above Rs.1500',
      code: 'AB86R',
    },
    {
      offer: '20',
      head: 'Christmas Sale Offer',
      content: 'on all orders above Rs.500',
      code: 'HI86R',
    },
    {
      offer: '35',
      head: 'Diwali Sale Offer',
      content: 'on all orders above Rs.300',
      code: 'KL86R',
    },
    {
      offer: '60',
      head: 'Onam Sale Offer',
      content: 'on all orders above Rs.2000',
      code: 'TN86R',
    },
    {
      offer: '80',
      head: 'Eid Sale Offer',
      content: 'on all orders above Rs.2500',
      code: 'KA86R',
    },
  ];
  return (
    <View style={responsiveStyle.main}>
      <ScrollView
        style={responsiveStyle.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <FlatList
          data={offersArray}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={responsiveStyle.contentStyle}
          renderItem={({item, index}) => {
            return (
              <View
                style={responsiveStyle.renderView}>
                {/*start design*/}

                <View style={responsiveStyle.offCircleView}>
                  <View
                    style={responsiveStyle.circleRight}></View>
                  <View
                    style={responsiveStyle.circleRight}></View>
                  <View
                    style={responsiveStyle.circleRight}></View>
                  <View
                    style={responsiveStyle.circleRight}></View>
                </View>

                <View
                  style={{
                    width: '65%',
                    height: 100,
                    backgroundColor: colors.secondaryGreen,
                    padding: 20,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Black',
                        color: colors.primaryGreen,
                        fontSize: 50,
                      }}>
                      {item.offer}
                    </Text>
                    <View>
                      <Text
                        style={{
                          fontFamily: 'Lato-Regular',
                          color: colors.primaryGreen,
                          fontSize: 14,
                        }}>
                        %
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lato-Regular',
                          color: colors.primaryGreen,
                          fontSize: 14,
                        }}>
                        OFF
                      </Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          fontFamily: 'Lato-Bold',
                          color: colors.black,
                          fontSize: 15,
                        }}>
                        {item.head}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lato-Regular',
                          color: colors.black_level_3,
                          fontSize: 11,
                        }}>
                        {item.content}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    height: 100,
                    backgroundColor: colors.secondaryGreen,
                  }}>
                  <View
                    style={responsiveStyle.circleCenter}></View>
                  <View
                    style={[
                      responsiveStyle.circleCenter,
                      {
                      marginBottom: -25 / 2,
                      }
                    ]}></View>
                </View>
                <View
                  style={{
                    width: '25%',
                    height: 100,
                    backgroundColor: colors.secondaryGreen,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 15,
                    paddingVertical: 15,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: colors.black_level_3,
                      fontSize: 14,
                    }}>
                    Use Code
                  </Text>
                  <View
                    style={{
                      marginVertical: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      justifyContent: 'center',
                      borderRadius: 15,
                      backgroundColor: colors.primaryGreen,
                      overflow: 'hidden',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.white,
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      {item.code}
                    </Text>
                  </View>
                </View>

                {/*end design*/}

                <View style={{marginLeft: -25 / 2}}>
                  <View
                    style={responsiveStyle.circleRight}></View>
                  <View
                    style={responsiveStyle.circleRight}></View>
                  <View
                    style={responsiveStyle.circleRight}></View>
                  <View
                    style={responsiveStyle.circleRight}></View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Offers;
