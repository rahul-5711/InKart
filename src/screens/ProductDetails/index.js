/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */

import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../components/common/colors';
import StarRating from 'react-native-star-rating-widget';
import MoreInfo from './components/Moreinfo';
import ExtraInfo from './components/ExtraInfo';
import ProductReview from './components/ProductReview';
import DeliveryInfo from './components/DeliveryInfo';
import ProductScroll from '../../components/ProductsScroll';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { updateCartCount, updateWishIds } from '../../storage/action';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from 'react-native-snackbar';

const ProductDetails = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const route = useRoute();
  const navigation = useNavigation();
  const [rating, setRating] = useState();
  const scrollRef = useRef(null);
  const {product} = route.params;
  const [productDetailsObj, setProductDetails] = useState({});
  const [qun, setQun] = useState(1);
  const userId = useSelector(state => state.userId);
  const wishIds = useSelector(state => state.wishIds);
  const cartCount = useSelector(state => state.cartCount);

  const dispatch = useDispatch();

  useEffect(() => {
    setProductDetails(product);
        console.log('ddd',product)
  }, [product]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" cart={true} />,
      headerRight: () => <CommonHeaderRight cart={true} share={true} />,
      title: '',
    });
  }, []);

  

  const navigationNeeded = (val, item) => {
    if (val) {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
      setProductDetails(item);
    }
  };

  const handleQuantity = type => {
    if (type === 'plus') {
      setQun(qun + 1);
    } else {
      if (qun === 1) {
        return;
      } else {
        setQun(qun - 1);
      }
    }
  };

  

  const handleAddToCart = async ()  => {
   // console.warn(productDetailsObj);
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', productDetailsObj.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            description: productDetailsObj.description,
            name: productDetailsObj.name,
            price: productDetailsObj.price,
            quantity: qun,
            userId: userId,
            productId: productDetailsObj.id,
            image: productDetailsObj.image,
          });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + qun,
            });
        }
      });
  };

  const addToWishlist = productDetails => {
    console.warn(productDetails);
    firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .where('productId', '==', productDetails.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('Wishlist')
            .add({
              created: Date.now(),
              updated: Date.now(),
              description: productDetails.description,
              name: productDetails.name,
              price: productDetails.price,
              userId: userId,
              image: productDetails.image,
              categoryID: productDetails.categoryId,
              productId: productDetails.id,
            })
            .then(resp => {
              dispatch(updateWishIds([...wishIds, productDetails.id]));
              Snackbar.show({
                text: 'Item added to wishlist',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Item is in your wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.primaryGreen,
            textColor: colors.white,
          });
        }
      });
  };



  return (
    <View>
      <ScrollView ref={scrollRef}>
        <View style={responsiveStyle.heart}>
         <TouchableOpacity onPress={() => addToWishlist(productDetailsObj)}>
            <Image
              source={
                wishIds.includes(productDetailsObj.id)
                  ? require('../../assets/images/wishRed.png')
                  : require('../../assets/images/Wishlist.png')
              }
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
                marginRight: 15,
              }}
            />
          </TouchableOpacity> 
        </View>
        <Image
          source={{uri: productDetailsObj?.image}}
          style={responsiveStyle.proImage}
        />
        <View style={responsiveStyle.mainView}>
          <Text style={responsiveStyle.name}>{productDetailsObj?.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <StarRating rating={rating} onChange={setRating} />
            <Text
              style={{
                color: colors.grey,
                marginLeft: 15,
                fontFamily: 'Lato-Regular',
                fontSize: 18,
              }}>
              (1 rating)
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={responsiveStyle.price}>
              ₹{parseFloat(productDetailsObj?.price).toFixed(2)}
            </Text>
            <Text
              style={{
                color: colors.primaryGreen,
                marginLeft: 15,
                fontFamily: 'Lato-Bold',
                fontSize: 18,
              }}>
              25% Off
            </Text>
          </View>
          <MoreInfo />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.grey,
              paddingVertical: 10,
            }}>
            <Text style={responsiveStyle.descHead}>Product Details</Text>
            <Text style={responsiveStyle.desc}>{productDetailsObj?.desc}</Text>
          </View>
          <ExtraInfo />
          <ProductReview product={product} />
          <DeliveryInfo />
          <ProductScroll isNavigationNeeded={navigationNeeded} />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          alignSelf: 'center',
          padding: 15,
          borderRadius: 8,
          backgroundColor: colors.primaryGreen,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '95%',
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 8,
            backgroundColor: colors.white,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => handleQuantity('minus')}>
            <AntDesign name="minus" size={25} color={colors.primaryGreen} />
          </TouchableOpacity>
          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
              marginHorizontal: 15,
            }}>
            {qun}
          </Text>
          <TouchableOpacity onPress={() => handleQuantity('plus')}>
            <AntDesign name="plus" size={25} color={colors.primaryGreen} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <Text
            style={{
              color: colors.white,
              fontFamily: 'Lato-Black',
              fontSize: 18,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
