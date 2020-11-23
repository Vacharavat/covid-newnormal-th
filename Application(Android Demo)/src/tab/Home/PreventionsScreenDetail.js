import React, { Component } from "react";
import {SafeAreaView} from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from '../../Status'
import { MainPreventionsDetail } from "../../components/MainPreventionsDetail";

export class PreventionsScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Preventions" navigation={this.props.navigation} />
        <MainPreventionsDetail />
      </SafeAreaView>
    );
  }
}