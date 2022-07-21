import React from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './FlexBox';
import PositionReactNative from './PositionReactNative';
import SampleComponent from './SampleComponent';
import StylingReactNative from './StylingReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNative />
        <StylingReactNative />
        <FlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
