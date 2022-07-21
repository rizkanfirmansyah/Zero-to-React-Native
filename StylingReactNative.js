import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import macbook from './mac.jpg';
import React, {Component} from 'react';

const StylingReactNative = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#2eb2ff',
          borderWidth: 2,
          borderColor: '#ee8666',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 16,
          }}>
          Rp. 25.000,00
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12,
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingReactNative;
