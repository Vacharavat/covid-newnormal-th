import React, { Component } from "react";
import {View, SafeAreaView, ScrollView} from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from "../../Status";
import {Province} from "./Province"
import {Piechart} from"./Piechart";
import {GlobalReport} from"./GlobalReport";
import {Gender} from "./Gender";

export class ReportScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Report" navigation={this.props.navigation}/>
        <View style={{flex:1,backgroundColor:Color.secondary}}>
          <ScrollView>
            <GlobalReport/>
            <Piechart/>
            <Gender/>
            <Province/>
      </ScrollView>
       </View>
      </SafeAreaView>
    );
  }
}
