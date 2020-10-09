import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {CustomHeader} from '../index';
import {CovidText} from '../core';
import Color from '../constants/colors';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.secondary,
          }}>
          <CovidText content="Home" />
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <CovidText content="Go Home Detail" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7b7ff',
  },
  bg: {
    flex: 0.3,
    //height:220,
    backgroundColor: '#436bfc',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
  },
  bigbox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: 'white',
    width: '40%',
    height: 100,
    margin: 8,
    borderRadius: 10,
  },
  symtomps: {
    top: 5,
    flex: 0.2,
  },
  preventions: {
    top: 50,
    flex: 0.2,
  },
  box2: {
    backgroundColor: 'white',
    width: '24%',
    height: 100,
    margin: 8,
    borderRadius: 10,
  },
  box3: {
    backgroundColor: 'white',
    width: '90%',
    height: 120,
    margin: 8,
    borderRadius: 10,
  },
});
