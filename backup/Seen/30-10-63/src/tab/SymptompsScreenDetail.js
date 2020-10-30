import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { Card } from "react-native-elements";
import Status from "../Status";

import MainSymptompsDetail from "../components/MainSymptompsDetail";

export class SymptompsScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Symptoms" navigation={this.props.navigation} />
        <MainSymptompsDetail />
      </SafeAreaView>
    );
  }
}
