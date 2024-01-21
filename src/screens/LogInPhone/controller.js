/* eslint-disable prettier/prettier */

export const validatePhone = phone => {
    const replaceString = phone.replace[/\a/g,''];
  return !/[a-zA-Z]/.test(replaceString) && !/[^\d\-+]/.test(replaceString);
};

export const validateOtp = otp => {
    return !/[!@#$%^&*()_+\-=[\]{};':"\\]/.test(otp);
  };
