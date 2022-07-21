import React, {Component} from 'react';
import {Text, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View style={{width: 800, height: 80, backgroundColor: 'white'}}>
      <Home />
      <BoxGreen />
      <Text>Rizkan</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Box Green Class COmponent</Text>;
  }
}

export default SampleComponent;
