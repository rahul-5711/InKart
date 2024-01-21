/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import { updateCartCount } from '../../storage/action';

const CustomFooter = ({state, descriptors, navigation}) => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(
    dimension.windowWidth,
    dimension.windowHeight,
    dimension.isPortrait,
  );
  const userId = useSelector(state => state.userId);
  const cartCount = useSelector(state => state.cartCount);

  const dispatch = useDispatch();

  useEffect(() => {
    getCartProducts();
  }, []);

  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        dispatch(updateCartCount(snapshot.size));
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={responsiveStyle.mainContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon =
          route.name == 'Home'
            ? require('../../assets/images/Home-white.png')
            : route.name === 'Categories'
            ? require('../../assets/images/category-white.png')
            : route.name === 'Search'
            ? require('../../assets/images/Search-white.png')
            : route.name === 'Offers'
            ? require('../../assets/images/Offers-white.png')
            : require('../../assets/images/Cart-white.png');
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={responsiveStyle.touchContainer}>
            {route.name == 'Cart' ? (
              <View style={responsiveStyle.cartCount}>
                <Text style={responsiveStyle.count}>{cartCount}</Text>
              </View>
            ) : null}
            <Image source={icon} style={responsiveStyle.iconStyle} />
            <Text style={responsiveStyle.footerText}>{route.name}</Text>
            {isFocused ? <Text style={responsiveStyle.dot}>.</Text> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomFooter;
