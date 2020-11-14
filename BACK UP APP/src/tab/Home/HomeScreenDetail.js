import React, { Component } from "react";
import {Text, View, SafeAreaView, FlatList} from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import axios from "axios";
import { Card } from 'react-native-elements'
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import Status from '../../Status'

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
    return(
      
      <View>
        <Card>
            <Card.Title>Case : {casedata.item.No}</Card.Title>
            <Card.Divider/>
            <Text><Entypo name="calendar" size={20} color={Color.red} /> วันที่ตรวจพบ : {casedata.item.ConfirmDate}</Text>
            <Text><MaterialCommunityIcons name="gender-male-female" size={20} color={Color.skyblue} /> เพศ : {casedata.item.Gender}</Text>
            <Text><Ionicons name="md-people" size={20} color="black" />  สัญชาติ : {casedata.item.Nation}</Text>
            <Text><FontAwesome name="map-pin" size={20} color={Color.gray} />   สถานที่ : {casedata.item.District} {casedata.item.Province} </Text>
          </Card>
      </View>
    )
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Case Details" navigation={this.props.navigation} />
        <View style={{ flex: 1, backgroundColor: Color.secondary }}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderCase}
          />
        </View>
      </SafeAreaView>
    );
  }
}

