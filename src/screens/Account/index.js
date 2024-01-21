/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */

import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../../components/common/colors';
import firestore from '@react-native-firebase/firestore';
import {useDimensionContext} from '../../context';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Snackbar from 'react-native-snackbar';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/common/validations';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../storage/action';
import {updateProfileImage} from './controller';

const Account = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const userId = useSelector(state => state.userId);
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const email = useSelector(state => state.email);
  const mobileNumber = useSelector(state => state.mobileNumber);
  const profileImage = useSelector(state => state.profileImage);

  const dispatch = useDispatch();

  const [fName, setfName] = useState(firstName);
  const [lName, setlName] = useState(lastName);
  const [phone, setPhone] = useState(mobileNumber);
  const [stateEmail, setEmail] = useState(email);
  const [model, setModel] = useState(false);
  const [modelChoose, setModelChoose] = useState(false);
  const [userImage, setUserImage] = useState('');

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const handleOpenImage = () => {
    setModel(!model);
  };
  const handleEditImage = () => {
    setModelChoose(true);
  };

  const handlePicFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUserImage(image.sourceURL ?? ''); //SourceURL
        setModelChoose(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleFromCamera = () => {
    setModelChoose(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleUpdateProfile = async () => {
    if (validatePhoneNumber(phone.trim())) {
      if (validateEmail(stateEmail.trim())) {
        if (fName !== '' && lName !== '') {
          let newUrl = profileImage;
          if (userImage !== '') {
            newUrl = await updateProfileImage(userImage);
          }
          await firestore()
            .collection('Users')
            .doc(userId)
            .update({
              firstName: fName,
              lastName: lName,
              email: stateEmail,
              mobilenumber: phone,
              profileImage: newUrl,
            })
            .then(() => {
              dispatch(
                updateProfile({
                  firstName: fName,
                  lastName: lName,
                  email: stateEmail,
                  mobileNumber: phone,
                  profileImage: newUrl === '' ? profileImage : '',
                }),
              );
              setUserImage('');
              Snackbar.show({
                text: 'Profile Updated',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Fill up all fields to continue',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: colors.red,
            textColor: colors.white,
          });
        }
        console.log('true');
      } else {
        Snackbar.show({
          text: 'Given Email is not valid ',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
      console.log('true');
    } else {
      Snackbar.show({
        text: 'Given Phone Number is not valid ',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };
  return (
    <ScrollView>
      <View style={responsiveStyle.container}>
        <Text style={responsiveStyle.head}>
          {firstName} {lastName}
        </Text>
        <View style={responsiveStyle.userImage}>
          <TouchableOpacity onPress={handleOpenImage}>
            <Image
              source={
                userImage === ''
                  ? profileImage === ''
                    ? require('../../assets/images/dummy-profile.png')
                    : {uri: profileImage}
                  : {uri: profileImage}
              }
              style={responsiveStyle.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={responsiveStyle.editTouch}
            onPress={handleEditImage}>
            <Image
              source={require('../../assets/images/pen.png')}
              style={responsiveStyle.edit}
            />
          </TouchableOpacity>
        </View>

        <CustomTextInput
          handleText={text => setfName(text)}
          value={fName}
          placeholder="First Name"
        />
        <CustomTextInput
          handleText={text => setlName(text)}
          value={lName}
          placeholder="Last Name"
        />
        <CustomTextInput
          type="email"
          handleText={text => setEmail(text)}
          value={stateEmail}
          placeholder="Email Address"
        />
        <CustomTextInput
          handleText={text => setPhone(text)}
          value={phone}
          placeholder="Mobile Number"
        />

        <CustomButton
          type="primary"
          handleButtonPress={handleUpdateProfile}
          buttonText={'Update Profile'}
        />

        <Modal
          visible={model}
          onRequestClose={() => setModel(false)}
          transparent>
          <View style={responsiveStyle.modelBack}>
            <View>
              <TouchableOpacity
                onPress={() => setModel(false)}
                style={responsiveStyle.close}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={responsiveStyle.closeIcon}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={
                profileImage === ''
                  ? require('../../assets/images/dummy-profile.png')
                  : {uri: profileImage}
              }
              style={responsiveStyle.bigImage}
            />
          </View>
        </Modal>

        <Modal
          visible={modelChoose}
          onRequestClose={() => setModelChoose(false)}
          transparent>
          <View style={responsiveStyle.modelBack}>
            <View>
              <TouchableOpacity
                onPress={() => setModelChoose(false)}
                style={responsiveStyle.close}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={responsiveStyle.closeIcon1}
                />
              </TouchableOpacity>
            </View>
            <View style={responsiveStyle.selectBox}>
              <TouchableOpacity
                style={responsiveStyle.touch}
                onPress={handlePicFromGallery}>
                <Text style={responsiveStyle.text}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={responsiveStyle.touch}
                onPress={handleFromCamera}>
                <Text style={responsiveStyle.text}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Account;
