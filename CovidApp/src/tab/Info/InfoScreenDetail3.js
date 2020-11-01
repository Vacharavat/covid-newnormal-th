import React, { Component } from "react";
import {SafeAreaView,ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View,} from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from "../../Status";
import { WebView } from 'react-native-webview';


export class InfoScreenDetail3 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     refreshing: false,
  //   };
  // }

  // _onRefresh = () => {
  //   this.setState({refreshing: true});
  //   fetchData().then(() => {
  //     this.setState({refreshing: false});
  //   });
  // }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="THAICHANA" navigation={this.props.navigation} />
        {/* <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      > */}
        <WebView bounces={false}
        source={{
          uri: 'https://merchant.thaichana.com'
        }}
        style={{ marginTop: 20 }}
      />
     {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
});

 