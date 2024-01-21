/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */

import {FlatList, Image, Text, View} from 'react-native';
import style from './style';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDimensionContext} from '../../../../context';
import colors from '../../../../components/common/colors';
import { useSelector } from 'react-redux';

const Trending = () => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const categories = useSelector(state => state.categories);
  return (
    <View style={responsiveStyle.main}>
      <Text style={responsiveStyle.title}>Trending Category</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={responsiveStyle.flatList}
        renderItem={({item, index}) => {
          const categoriesColor =
            index % 4 === 0
              ? colors.category1
              : index % 4 === 1
              ? colors.category2
              : index % 4 === 2
              ? colors.category3
              : index % 4 === 3
              ? colors.category4
              : colors.category1;
          return (
            <View style={[responsiveStyle.imageCon, {backgroundColor:categoriesColor}]}>
              <Image source={{uri: item.image}} style={responsiveStyle.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Trending;
