/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */

import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../../context';
import colors from '../../../../components/common/colors';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { updatecategories } from '../../../../storage/action';
import { useNavigation } from '@react-navigation/native';

const ShopCategory = () => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await firestore()
      .collection('Categories')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setCategories(result);
          dispatch(updatecategories(result));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleCategories = index => {
    navigation.navigate('Categories', {catIndex: index});
  };

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>Shop By Category</Text>
      <FlatList
        data={categories}
        numColumns={4}
        contentContainerStyle={responsiveStyle.flatList}
        keyExtractor={(item, index) => String(index)}
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
            <TouchableOpacity onPress={() => handleCategories(index)} style={responsiveStyle.innerView}>
              <View
                style={[
                  responsiveStyle.imaageView,
                  {backgroundColor: categoriesColor},
                ]}>
                <Image
                  style={responsiveStyle.image}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={responsiveStyle.itemName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ShopCategory;
