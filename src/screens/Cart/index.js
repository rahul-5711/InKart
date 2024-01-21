/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
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
import colors from '../../components/common/colors';
import OrderTotal from './components/OrderTotal';
import CommonButton from '../../components/CommonButton';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';
import Snackbar from 'react-native-snackbar';

const Cart = () => {
  const userId = useSelector(state => state.userId);
  const cartCount = useSelector(state => state.cartCount);
  const email = useSelector(state => state.email);
  const mobileNumber = useSelector(state => state.mobileNumber);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [charges, setCharges] = useState(50);

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) {
      getCartProducts();
    }
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      getCartProducts();
    }, []),
  );

  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCharges(50);
    } else {
      setCharges(0);
    }
  }, [cartProducts]);

  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          let totalAmount = 0;
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const amount =
                parseFloat(doc?.data().price) * parseInt(doc?.data().quantity);
              totalAmount = totalAmount + amount;
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setTotal(totalAmount);
          setCartProducts(result);
        } else {
          setCartProducts([]);
          setTotal(0);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const updateArray = productInfo => {
    const result = cartProducts.filter(x => {
      return x.id !== productInfo.id;
    });
    setTotal(total - parseFloat(productInfo.price));
    setCartProducts(result);
    dispatch(updateCartCount(cartCount - 1));
  };

  const handleTotal = (type, productInfo) => {
    if (type === 'add') {
      setTotal(total + parseFloat(productInfo.price));
    } else {
      setTotal(total - parseFloat(productInfo.price));
    }
  };

  const onButtonPress = () => {
    try{
    if (cartProducts.length > 0) {
      if (email === '' || mobileNumber === ''){
        Snackbar.show({
          text: 'Complete your profile to continue',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
        navigation.navigate('Account');
      } else {
        navigation.navigate('AddAddress', {
          cartProducts:cartProducts,
          total: parseFloat(total + charges).toFixed(2),
        });
      }
    } else {
      Snackbar.show({
        text: 'Your cart is empty',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  } catch (error) {
    console.warn(error);
  }
};

  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <ScrollView>
      <View style={responsiveStyle.container}>
        <FlatList
          data={cartProducts}
          extraData={cartProducts}
          renderItem={({item, index}) => (
            <RenderItem
              item={item}
              index={index}
              updateArray={updateArray}
              handleTotal={handleTotal}
            />
          )}
          keyExtractor={(item, index) => {
            String(index);
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: 30,
                }}>
                <Text
                  style={{
                    fontFamily: 'Lato-Black',
                    color: colors.black,
                    fontSize: 25,
                  }}>
                  Cart is Empty
                </Text>
                <TouchableOpacity>
                  <Text style={{color: colors.black}}>Go to Shop</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />

        <View style={responsiveStyle.renderView}>
          {/*start design*/}

          <View style={responsiveStyle.offCircleView}>
            <View style={responsiveStyle.circleRight}></View>
            <View style={responsiveStyle.circleRight}></View>
            <View style={responsiveStyle.circleRight}></View>
            <View style={responsiveStyle.circleRight}></View>
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
                50
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
                  On your first order
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    color: colors.black_level_3,
                    fontSize: 11,
                  }}>
                  Order above 2500 rupees
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
            <View style={responsiveStyle.circleCenter}></View>
            <View
              style={[
                responsiveStyle.circleCenter,
                {
                  marginBottom: -25 / 2,
                },
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
                S0C43
              </Text>
            </View>
          </View>

          {/*end design*/}

          <View style={{marginLeft: -25 / 2}}>
            <View style={responsiveStyle.circleRight}></View>
            <View style={responsiveStyle.circleRight}></View>
            <View style={responsiveStyle.circleRight}></View>
            <View style={responsiveStyle.circleRight}></View>
          </View>
        </View>

        <OrderTotal total={total} charges={charges} />
        <CommonButton
          buttonText={'Proceed to Checkout'}
          onButtonPress={onButtonPress}
        />
      </View>
    </ScrollView>
  );
};

const RenderItem = ({item, index, updateArray, handleTotal}) => {
  const userId = useSelector(state => state.userId);
  const navigation = useNavigation();
  const [qun, setQun] = useState(item.quantity);
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  useEffect(() => {
    setQun(item.quantity);
  }, [item]);

  const addToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.productId)
      .get()
      .then(snapshot => {
        firestore()
          .collection('Cart')
          .doc(snapshot?.docs[0].id)
          .update({
            quantity: parseInt(snapshot?.docs[0].data().quantity) + 1,
          });
        handleTotal('add', item);
      });
  };

  const removeItem = async () => {
    if (qun <= 1) {
      //remove from cart
      await firestore()
        .collection('Cart')
        .doc(item.id)
        .delete()
        .then(() => {
          updateArray(item);
        });
    } else {
      //update quantity
      setQun(qun - 1);
      firestore()
        .collection('Cart')
        .doc(item.id)
        .update({
          quantity: parseInt(item.quantity, 10) - 1,
        });
      handleTotal('minus', item);
    }
  };

  const redirectToProductDetails = () => {
    navigation.navigate('ProductDetails', {product: item});
  };

  return (
    <TouchableOpacity
      onPress={redirectToProductDetails}
      style={responsiveStyle.productView}>
      <Image source={{uri: item.image}} style={responsiveStyle.productImage} />
      <View style={responsiveStyle.nameView}>
        <Text style={responsiveStyle.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={responsiveStyle.des} numberOfLines={2}>
          {item.desc}
        </Text>
        <View style={responsiveStyle.priceView}>
          <View style={responsiveStyle.priceView2}>
            <Text style={responsiveStyle.price}>₹ {item.price}</Text>
            <View style={responsiveStyle.offView}>
              <Text style={responsiveStyle.offText}>50%</Text>
            </View>
          </View>
          <View style={responsiveStyle.qunView}>
            <TouchableOpacity onPress={removeItem}>
              <Text style={responsiveStyle.qunText1}>-</Text>
            </TouchableOpacity>
            <Text style={responsiveStyle.qunText2}>{qun}</Text>
            <TouchableOpacity
              onPress={() => {
                setQun(qun + 1);
                addToCart();
              }}>
              <Text style={responsiveStyle.qunText1}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cart;
