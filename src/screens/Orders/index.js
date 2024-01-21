/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';
import CustomSearch from '../../components/CustomSearch';
import colors from '../../components/common/colors';
import {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const Orders = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const [ordersArray, setOrdersArray] = useState([]);
  const userId = useSelector(state => state.userId);
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getOrders();
    }
  }, [isFocused]);

  useEffect(() => {
    getOrders();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const getOrders = async () => {
    await firestore()
      .collection('Orders')
      .where('userId', '==', userId)
      .get()
      .then(snapShot => {
        if (snapShot.empty) {
          setOrdersArray([]);
        } else {
          const objArray = [];
          snapShot?.docs.forEach(document => {
            if (document.exists) {
              const result = {id: document.id, ...document?.data()};
              objArray.push(result);
            }
          });
          setOrdersArray(objArray);
        }
      });
  };

  const handleSearch = async text => {
    await firestore()
    .collection('Orders')
    .where('userId','==',userId)
    .orderBy('orderId')
    .startAt (String(text))
    .endAt(String(text) + '\uf8ff')
    .get()
    .then(snapShot => {
      if (snapShot.empty) {
        setOrdersArray([]);
      } else {
        const objArray = [];
        snapShot?.docs.forEach(document => {
          if (document.exists) {
            const result = {id: document.id, ...document?.data() };
            objArray.push(result);
          }
        });
        setOrdersArray(objArray);
      }
    });
  };

  const navigateToDetails = (item) => {
    navigation.navigate('OrderDetails',{item:item});
  };

  return (
    <ScrollView>
      <View style={responsiveStyle.container}>
        <CustomSearch
          filter={true}
          placeholder={'Search using Order Id'}
          mike={false}
          onChangeText={handleSearch}
        />
        <FlatList
          data={ordersArray}
          extraData={ordersArray}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  padding: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Lato-Bold',
                    fontSize: 18,
                    color: colors.primaryGreen,
                  }}>
                  No Data
                </Text>
              </View>
            );
          }}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigateToDetails(item)} style={responsiveStyle.flatView}>
                <View style={responsiveStyle.innerView}>
                  <View>
                    <Text style={responsiveStyle.orderId}>
                      ID: {item.orderId}
                    </Text>
                    <Text
                      style={{
                        color: colors.primaryGreen,
                        fontFamily: 'Lato-Regular',
                        fontSize: 14,
                      }}>
                      Ordered on: {item.created}
                    </Text>
                    <Text style={responsiveStyle.address}>{item.address1}</Text>
                    <Text style={responsiveStyle.address}>{item.address2}</Text>
                    <Text style={responsiveStyle.paidText}>
                      Paid:{' '}
                      <Text style={responsiveStyle.greenText}>
                        {item.totalAmount}
                      </Text>{' '}
                      <Text
                        style={{
                          color: colors.black,
                          fontFamily: 'Lato-Regular',
                          fontSize: 14,
                        }}>
                        Items:
                      </Text>{' '}
                      <Text style={responsiveStyle.greenText}>
                        {item.cartItems.length}
                      </Text>
                    </Text>
                  </View>
                  <Image
                    source={require('../../assets/images/map.jpeg')}
                    style={responsiveStyle.mapImage}
                  />
                </View>
                <View style={responsiveStyle.bottomView}>
                  <Text style={responsiveStyle.bottomText}>Order Shipped</Text>
                  <Text
                    style={{
                      color: colors.black_level_3,
                      fontFamily: 'Lato-Regular',
                      fontSize: 14,
                    }}>
                    Rate & Review Products
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </ScrollView>
  );
};

export default Orders;
