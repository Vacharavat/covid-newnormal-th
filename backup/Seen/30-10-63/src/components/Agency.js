import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import Color from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

export class Agency extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <Card.Title>{this.props.detail.agency}</Card.Title>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={this.props.detail.image}
              style={{ width: 100, height: 100, marginBottom: 10 }}
            />
          </View>
          <Card.Divider />
          <Text
            onPress={() => {
              Linking.openURL(this.props.detail.link);
            }}
            style={{
              color: Color.gray,
              fontWeight: "bold",
              padding: 1,
              fontSize: 14,
            }}
          >
            {" "}
            <Entypo name="link" size={14} color="black" />{" "}
            {this.props.detail.link}
          </Text>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Agency;
