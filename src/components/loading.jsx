import React from 'react';
import Lottie from 'lottie-react-native';
import { View } from 'react-native';

export default function Loading() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Lottie
        source={{ uri: "https://assets5.lottiefiles.com/packages/lf20_iwmd6pyr.json" }}
        style={{
          width: 130,
          height: 133,
        }}
        autoPlay
        loop
      />
    </View>
  );
}