/* eslint-disable prettier/prettier */

import {
  UPDATECATEGORIES,
  LOGIN,
  SIGNOUT,
  UPDATEPROFILE,
  UPDATECARTCOUNT,
  UPDATEWISHIDS,
} from './constants';

export const login = data => ({
  type: LOGIN,
  payload: {
    userId: data.userId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobileNumber: data.mobileNumber,
    profileImage: data.profileImage,
  },
});

export const signout = data => ({
  type: SIGNOUT,
  payload: {},
});

export const updateProfile = data => ({
  type: UPDATEPROFILE,
  payload: {
    userId: data.userId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobileNumber: data.mobileNumber,
    profileImage: data.profileImage,
  },
});

export const updatecategories = data => ({
  type: UPDATECATEGORIES,
  payload: {
    categories: data,
  },
});

export const updateCartCount = data => ({
  type: UPDATECARTCOUNT,
  payload: {
    cartCount: data,
  },
});

export const updateWishIds = data => ({
  type: UPDATEWISHIDS,
  payload: {
    wishIds: data,
  },
});
