import React, { Component } from "react";
import {SafeAreaView,} from "react-native";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import { WebView } from 'react-native-webview';

export class NewScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor: "rgb(35,181,116)"  }}>
        <Status/>
        <CustomHeader title="Kapook!" navigation={this.props.navigation} />
        <WebView source={{ uri: 'https://covid-19.kapook.com/news'}}/>
      </SafeAreaView>
    );
  }
}


 