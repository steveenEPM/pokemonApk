import * as Animatable from 'react-native-animatable';
import React, { createRef } from 'react';

const ViewAnimate = ({ children , animation, delay}) => {

  return (
    <Animatable.View
      animation={animation ? animation : "fadeInUp"}
      delay={ delay ? delay : 5}
    >
      {children}
    </Animatable.View>
  )
}

export default ViewAnimate