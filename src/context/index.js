/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */


import React, {createContext, useContext, useEffect, useState} from 'react';
import {useWindowDimensions, Dimensions as dim, Dimensions} from 'react-native';

export const DimensionContext = createContext();
export const useDimensionContext = () => useContext(DimensionContext);

export const DimensionContextProvider = ({children}) => {
  const dimensions = useWindowDimensions();
  const initheight = dim.get('window').height;
  const initwidth = dim.get('window').width;

  const [windowWidth, setWindowWidth] = useState(initwidth);
  const [windowHeight, setWindowHeight] = useState(initheight);
  const [isPortrait,setIsPortrait] = useState(false);

  const checkIsPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    setIsPortrait(checkIsPortrait());
    Dimensions.addEventListener('change', () => {
      setIsPortrait(checkIsPortrait());
    });
  }, []);

  useEffect(() => {
    setItem();
  }, [dimensions]);

  const setItem = () => {
    const {height, width} = dimensions;
    setWindowHeight(height);
    setWindowWidth(width);
  };

  return (
    <DimensionContext.Provider
      value={{
        windowHeight,
        windowWidth,
        isPortrait,
      }}>
      {children}
    </DimensionContext.Provider>
  );
};
