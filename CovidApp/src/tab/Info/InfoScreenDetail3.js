import React, { Component } from "react";
import {SafeAreaView} from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from "../../Status";
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

 