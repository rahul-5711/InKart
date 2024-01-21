/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import {useState, useEffect} from 'react';
import {View, Text, ScrollView, Modal, ActivityIndicator} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation, useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import colors from '../../components/common/colors';
import CustomButton from '../../components/CustomButton';
import {useDimensionContext} from '../../context';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';

const OrderDetails = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const route = useRoute();
  const {item} = route.params;
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CommonHeaderLeft
          type={'back'}
          action={() => navigation.navigate('Orders')}
        />
      ),
      title: 'Order Summary',
    });
  }, []);

  const reOrder = async () => {
    try {
      setLoading(true);
      const smallId = Math.random().slice(4, 12).toUpperCase();
      await firestore()
        .collection('Orders')
        .add({
          orderId: String(smallId).toUpperCase(),
          created: Date.now(),
          updated: Date.now(),
          orderStatus: 'Ordered',
          totalAmount: item.totalAmount,
          address: item.address,
          userId: item.userId,
          paymentMethod: 'online',
          cartItems: item.cartItems,
          userName: item.userName,
          userEmail: item.userEmail,
          userPhone: item.mobileNumber,
          expDelDate: '',
        })
        .then(async resp => {
          if (resp) {
            Snackbar.show({
              text: 'Your Order is Successfully Placed',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: colors.primaryGreen,
              textColor: colors.white,
            });
            setLoading(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={responsiveStyle.container}>
      <Modal animationType="slide" transparent={true} visible={loading}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.white} />
        </View>
      </Modal>
      <ScrollView
        style={responsiveStyle.scrollView}
        contentContainerStyle={responsiveStyle.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={responsiveStyle.greenBox}>
          <Feather name="box" size={45} color={colors.white} />
          <View style={responsiveStyle.greenTextBox}>
            <Text
              style={{
                color: colors.white,
                fontFamily: 'Lato-Regular',
                fontSize: 16,
              }}>
              Order Id: #{item?.orderId ?? 'GFYGHBJJU'}
            </Text>
            <Text
              style={{
                color: colors.white,
                fontFamily: 'Lato-Black',
                fontSize: 20,
              }}>
              {item?.orderStatus ?? ''}
            </Text>
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
            }}>
            Items:
          </Text>
          {item?.cartItems &&
            item.cartItems.map((ele, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <View
                    style={{
                      backgroundColor: colors.primaryGreen,
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      borderRadius: 10,
                      marginRight: 15,
                    }}>
                    <Text
                      style={{
                        color: colors.white,
                        fontFamily: 'Lato-Bold',
                        fontSize: 10,
                      }}>
                      {ele.quantity}
                    </Text>
                  </View>
                  <View>
                    <FontAwsome5
                      name="star-of-life"
                      size={16}
                      color={colors.black_level_1}
                    />
                  </View>
                  <View
                    style={{width: '60%', overflow: 'hidden', marginLeft: 15}}>
                    <Text
                      style={{
                        color: colors.black,
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                      }}>
                      {ele.name}
                    </Text>
                    <Text
                      style={{
                        color: colors.black_level_3,
                        fontFamily: 'Lato-Light',
                        fontSize: 12,
                      }}>
                      {ele.desc}
                    </Text>
                  </View>
                  <View style={{width: '20%'}}>
                    <Text
                      style={{
                        color: colors.black,
                        fontFamily: 'Lato-Bold',
                        fontSize: 15,
                      }}>
                      ₹ {ele.price}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>

        <View style={{marginVertical: 15}}>
          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
            }}>
            Payment Details
          </Text>
          <View
            style={{
              marginVertical: 15,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
              borderBottomColor: colors.black_level_3,
              borderBottomWidth: 1,
            }}>
            <View>
              <Text
                style={{
                  lineHeight: 25,
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                Bag Total
              </Text>
              <Text
                style={{
                  lineHeight: 25,
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                Coupon Discount
              </Text>
              <Text
                style={{
                  lineHeight: 25,
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                Delivery
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  lineHeight: 25,
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                ₹ 130
              </Text>
              <Text
                style={{
                  lineHeight: 25,
                  color: colors.red,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                Apply Coupon
              </Text>
              <Text
                style={{
                  lineHeight: 25,
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                ₹ 50.00
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Lato-Bold',
                fontSize: 18,
              }}>
              Total Amount
            </Text>
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Lato-Bold',
                fontSize: 18,
              }}>
              ₹ {item.totalAmount}
            </Text>
          </View>
        </View>

        <View style={{marginVertical: 15}}>
          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
            }}>
            Address:
          </Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Lato-Regular',
              fontSize: 16,
              lineHeight: 20,
            }}>
            Rick Nelon
          </Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Lato-Regular',
              fontSize: 16,
              lineHeight: 20,
            }}>
            HR Apartments, 70
          </Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Lato-Regular',
              fontSize: 16,
              lineHeight: 20,
            }}>
            NK, US, 100052
          </Text>
        </View>

        <View style={{marginVertical: 15}}>
          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
            }}>
            Payment Method:
          </Text>
          <View
            style={{
              marginVertical: 15,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FontAwsome name="cc-visa" size={30} color={colors.black} />
            <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                **** **** **** 7866
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: 'Lato-Regular',
                  fontSize: 16,
                }}>
                {item?.paymentMethod ?? ''}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: 15,
          backgroundColor: colors.white,
        }}>
        <CustomButton
          type="primary"
          handleButtonPress={reOrder}
          buttonText={'Reorder'}
        />
      </View>
    </View>
  );
};

export default OrderDetails;
