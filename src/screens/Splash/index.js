/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {Image, View} from 'react-native';
import colors from '../../components/common/colors';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/logo-icon.jpeg')}
        style={{width: 150, height: 150, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;
