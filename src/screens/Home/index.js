/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useRef } from 'react';
import {ScrollView, View, Text} from 'react-native';
import style from './style';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import Banner from './Components/Banner';
import RecentBought from './Components/RecentBought';
import ShopCategory from './Components/ShopCategory';
import ProductScroll from '../../components/ProductsScroll';
import OfferProducts from '../../components/OfferProducts';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { updateWishIds } from '../../storage/action';
import { useIsFocused } from '@react-navigation/native';
const Home = () => {
  const userId = useSelector(state => state.userId);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      scrollRef.current.scrollTo({y: 0, animated: true});
    }
  }, [isFocused]);

  useEffect(() => {
    getWishIds();
  }, []);

  const getWishIds = async () => {
    await firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .get()
      .then(snapShot => {
        if (snapShot.empty) {
          //setWishItems([]);
          dispatch(updateWishIds([]));
        } else {
          const idArray = [0];
          snapShot?.docs.forEach(document => {
            idArray.push(document?.data().productId);
          });
          dispatch(updateWishIds(idArray));

        }
      });
  };



  return (
    <View style={style.main}>
      <CommonHeader />
      <ScrollView
      ref={scrollRef}
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Banner />
        <RecentBought />
        <ShopCategory />
        <ProductScroll />
        <OfferProducts />
        <Text style={style.footText}>
          Didn't find what you are looking for?
        </Text>
        <View style={style.footButton}>
          <Text style={style.footButtonText}>Browse Category</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
