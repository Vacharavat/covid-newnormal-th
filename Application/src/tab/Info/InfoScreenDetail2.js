import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from "../../Status";
import MainAgency from "../../components/MainAgency";
export class InfoScreenDetail2 extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="COVID AGENCY" navigation={this.props.navigation} />
        <MainAgency/>
      </SafeAreaView>
    );
  }
}

