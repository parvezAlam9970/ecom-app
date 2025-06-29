import React from 'react';
import {TouchableOpacity} from 'react-native';

const CustomTouchableOpacity = ({style, activeOpacity = 0.7, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[{elevation: 0}, style]}
      {...props}
    />
  );
};

export default CustomTouchableOpacity;
