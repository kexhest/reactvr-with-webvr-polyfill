import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

class ReactVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('oslo.jpg')}/>
        <Text
          style={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 0.4,
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }],
          }}>
          React Oslo
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVR', () => ReactVR);
