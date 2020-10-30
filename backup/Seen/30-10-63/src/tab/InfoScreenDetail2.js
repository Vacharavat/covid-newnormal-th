import React, { Component } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import Status from "../Status";
import MainAgency from "../components/MainAgency";

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

const styles = StyleSheet.create({
  //{/* Background Color */}
  // topblock: {
  //   flex: 0.35,
  //   backgroundColor: Color.primary,
  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  //   justifyContent: "center",
  // },
  // //{/* Statistic block1 */}
  // bigstatblock: {
  //   top: -30,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginTop: 20,
  // },
  // //{/* Substatistic block1 */}
  // statblock: {
  //   backgroundColor: "white",
  //   width: "90%",
  //   height: 150,
  //   // marginLeft: '5%',
  //   borderRadius: 10,
  //   justifyContent: "center",
  //   marginTop: 20,
  // },
});