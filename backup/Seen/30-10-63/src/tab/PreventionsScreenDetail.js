import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import Status from "../Status";
import MainPreventionsDetails from "../components/MainPreventionsDetail";

export class PreventionsScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Preventions" navigation={this.props.navigation} />
        <MainPreventionsDetails />
      </SafeAreaView>
    );
  }
}
