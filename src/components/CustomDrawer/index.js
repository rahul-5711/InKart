/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../common/colors';
import style from './style';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import {signout} from '../../storage/action';
import {useDispatch, useSelector} from 'react-redux';

const CustomDrawer = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.height,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const email = useSelector(state => state.email);
  const profileImage = useSelector(state => state.profileImage);
  const Contents = [
    {
      itemid: 0,
      itemName: 'Home',
      navigateTo: 'MyFooter',
      icon: require('../../assets/images/home.png'),
    },
    {
      itemid: 1,
      itemName: 'Shop by Category',
      navigateTo: 'Categories',
      icon: require('../../assets/images/drawer.png'),
    },
    {
      itemid: 2,
      itemName: 'Orders',
      navigateTo: 'Orders',
      icon: require('../../assets/images/orders.png'),
    },
    {
      itemid: 3,
      itemName: 'Wishlist',
      navigateTo: 'Wishlist',
      icon: require('../../assets/images/Wishlist.png'),
    },
    {
      itemid: 4,
      itemName: 'Account',
      navigateTo: 'Account',
      icon: require('../../assets/images/user.png'),
    },
  ];

  const handleSignout = () => {
    dispatch(signout());
  };
  return (
    <View style={responsiveStyle.mainContainer}>
      {/* profile */}
      <TouchableOpacity
        style={responsiveStyle.accountTouch}
        onPress={() => navigation.navigate('Account')}>
        <View style={responsiveStyle.accountImageView}>
          <Image
            source={
              profileImage === ''
                ? require('../../assets/images/dummy-profile.png')
                : {uri: profileImage}
            }
            style={responsiveStyle.image}
          />
        </View>
        <View style={responsiveStyle.nameView}>
          <Text style={responsiveStyle.name}>
            {firstName} {lastName}
          </Text>
          <Text style={responsiveStyle.email}>{email}</Text>
        </View>
      </TouchableOpacity>
      {/* drawer contents */}
      <View style={responsiveStyle.commonMargin}>
        <View>
          {Contents.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.itemid}
                onPress={() => navigation.navigate(item.navigateTo)}
                style={responsiveStyle.drawerView}>
                <View style={responsiveStyle.drawerInnerView}>
                  <Image source={item.icon} style={responsiveStyle.icon} />
                  <Text style={responsiveStyle.drawerText}>
                    {item.itemName}
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/arrow-right.png')}
                  style={responsiveStyle.iconSecond}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* logout */}
      <TouchableOpacity
        onPress={handleSignout}
        style={responsiveStyle.logoutView}>
        <Image
          source={require('../../assets/images/arrow-right.png')}
          style={[responsiveStyle.icon, responsiveStyle.arrow]}
        />
        <Text style={responsiveStyle.logoutText}>Sign Out</Text>
      </TouchableOpacity>

      {/*contact support*/}
      <View style={responsiveStyle.supportView}>
        <Text style={responsiveStyle.supportHead}>Contact support</Text>
        <Text style={responsiveStyle.supportContent}>
          If you have any problem with the app, Feel free to contact our 24
          hours support system
        </Text>
        <View style={responsiveStyle.supportTouch}>
          <Text style={responsiveStyle.supportText}>Contact</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
