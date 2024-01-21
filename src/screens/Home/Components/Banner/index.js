/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../../context';
import firestore from '@react-native-firebase/firestore';

const Banner = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  const [bannerItems, setbannerItems] = useState([]);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    await firestore()
      .collection('Banners')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              result.push(doc.data());
            }
          });
          setbannerItems(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <FlatList
        data={bannerItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <ImageBackground
              source={{uri: item.image}}
              style={responsiveStyle.banner}>
              <View style={responsiveStyle.innerView}>
                <Text style={responsiveStyle.head}>{item.head}</Text>
                <Text style={responsiveStyle.content}>{item.desc}</Text>
                <TouchableOpacity style={responsiveStyle.touch}>
                  <Text style={responsiveStyle.touchText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
};

export default Banner;
