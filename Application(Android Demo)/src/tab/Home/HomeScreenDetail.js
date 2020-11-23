import React, { Component } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import axios from "axios";
import { Card } from "react-native-elements";
import {
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Status from "../../Status";

export class HomeScreenDetail extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("https://covid19.th-stat.com/api/open/cases")
      .then((res) => {
        this.setState({
          data: res.data.Data,
        });
      })
      .catch((er) => console.log(er.messagge));
  }
  renderCase = (casedata) => {
    return (
      <View>
        <Card>
          <Card.Title>Case : {casedata.item.No} | {casedata.item.ConfirmDate[0]}
            {casedata.item.ConfirmDate[1]}
            {casedata.item.ConfirmDate[2]}
            {casedata.item.ConfirmDate[3]}
            {casedata.item.ConfirmDate[4]}
            {casedata.item.ConfirmDate[5]}
            {casedata.item.ConfirmDate[6]}
            {casedata.item.ConfirmDate[7]}
            {casedata.item.ConfirmDate[8]}
            {casedata.item.ConfirmDate[9]}
            </Card.Title>
          <Card.Divider />
          <Text style={{ paddingTop:4 }}>
            <Text style={{ fontWeight: "bold",}}>เพศ : </Text>
            {casedata.item.Gender} <Ionicons name="ios-man" size={18} color="rgb(10,132,255)" /><Ionicons name="ios-woman" size={18} color="rgb(191,90,242)" />
          </Text>
          <Text style={{ paddingTop:4 }}>
            <Text style={{ fontWeight: "bold",}}>สัญชาติ : </Text>
            {casedata.item.Nation} <Ionicons name="ios-flag" size={18} color={Color.green} />
          </Text>
          <Text style={{ paddingTop:4 }}>
            <Text style={{ fontWeight: "bold",}}>สถานที่ : </Text>
            {casedata.item.District} {casedata.item.Province} <FontAwesome name="map-marker" size={18} color="red" />
          </Text>
        </Card>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Case Details" navigation={this.props.navigation} />
        <View style={{ flex: 1, backgroundColor: Color.secondary }}>
          <FlatList data={this.state.data} renderItem={this.renderCase} />
        </View>
      </SafeAreaView>
    );
  }
}
