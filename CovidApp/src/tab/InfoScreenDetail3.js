import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import Status from "../Status";
import { WebView } from 'react-native-webview';

export class InfoScreenDetail3 extends Component {


  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="THAICHANA" navigation={this.props.navigation} />
        <WebView
        source={{
          uri: 'https://merchant.thaichana.com'
        }}
        style={{ marginTop: 20 }}
      />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
   flex: 1,
   fontSize: 18,
   padding: 32,
   color: '#777',
  },
  textBold: {
   fontWeight: '500',
   color: '#000',
  },
  buttonText: {
   fontSize: 21,
   color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
 });
 