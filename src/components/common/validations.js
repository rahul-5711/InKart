/* eslint-disable prettier/prettier */

export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const validatePhoneNumber = PhoneNumber => {
  const phoneNumberRegex = /^[0-9]{10}$/;

  if (phoneNumberRegex.test(PhoneNumber)) {
    return true;
  } else {
    return false;
  }
};
