import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNative from './StylingReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNative />
        <StylingReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
